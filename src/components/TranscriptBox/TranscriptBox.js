import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Button, TooltipDefinition } from 'carbon-components-react';
import KeywordTooltip from '../KeywordTooltip';
import { createWordRegex } from './utils';
import axios from 'axios';
import { Link } from 'react-router-dom';

const mapTranscriptTextToElements = (text, keywordInfo, totalIndex) => {
  let finalSentenceArray = [];
  let matches = [];

  if (keywordInfo.length > 0) {
    const regex = createWordRegex(keywordInfo);
    matches = text.split(regex);
  }

  // If we don't have words to find yet, just return the interim text.
  if (matches.length === 0) {
    return [
      {
        text,
        type: 'normal',
      },
    ];
  }

  const wordOccurences = {};
  finalSentenceArray = matches.map((sentenceFragment, index) => {
    // Use lowercased version when searching through keyword map.
    const fragmentToSearch = sentenceFragment.toLowerCase();

    if (index % 2 === 0) {
      return {
        text: sentenceFragment,
        type: 'normal',
      };
    }

    // Find keyword info object to use based on text from sentenceFragment and
    // current index in wordOccurences.
    const keywordInfoMatch =
      keywordInfo[totalIndex] && keywordInfo[totalIndex][fragmentToSearch];
    let keywordOccurenceIndex = 0;
    if (wordOccurences[fragmentToSearch]) {
      keywordOccurenceIndex = wordOccurences[fragmentToSearch];
      wordOccurences[fragmentToSearch] += 1;
    } else {
      wordOccurences[fragmentToSearch] = 1;
    }
    const infoForOccurence =
      keywordInfoMatch && keywordInfoMatch[keywordOccurenceIndex];

    // Bail in case we can't get the keyword info for whatever reason.
    if (!infoForOccurence) {
      return {};
    }

    return {
      text: sentenceFragment,
      type: 'keyword',
      startTime: infoForOccurence.start_time,
      endTime: infoForOccurence.end_time,
      confidence: infoForOccurence.confidence,
    };
  });

  return finalSentenceArray;
};

export const TranscriptBox = ({
  keywordInfo,
  transcriptArray,
  getLength,
  getText,
}) => {
  const textDiv = useRef(null);
  const handleGo = () => {
    const spans = textDiv.current.querySelectorAll('span');
    let str = '';
    spans.forEach((element) => {
      str += element.innerText;
    });

    axios
      .post('http://localhost:5000/postText', {
        text: str,
      })
      .then(({ data }) => console.log(data))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div ref={textDiv} className="transcript-box">
        {transcriptArray.map((transcriptItem, overallIndex) => {
          const { speaker, text } = transcriptItem;
          const parsedTextElements = mapTranscriptTextToElements(
            text,
            keywordInfo,
            overallIndex,
          );
          // let characters = [];
          // let characters = parsedTextElements.map((element) => element.text);
          // characters = characters.filter((element) => element != undefined);
          // getText(characters.join(''));
          // getLength(characters.join('').length);

          // console.log('new line' + result);

          return (
            <div key={`transcript-${overallIndex}`}>
              {speaker !== null && (
                <>
                  <span className={`speaker-label--${speaker}`}>
                    {`Speaker ${speaker}: `}
                  </span>
                </>
              )}
              {parsedTextElements.map((element, elementIndex) => {
                if (!element) {
                  return null;
                }

                if (element.type === 'normal') {
                  // console.log('NEW LINE ' + element.text);
                  // characters.push(element.text);
                  // console.log('NEW LINE ' + characters.join(''));
                  return (
                    <>
                      <span
                        key={`transcript-text-${overallIndex}-${elementIndex}`}
                      >{`${element.text}`}</span>
                    </>
                  );
                } else if (element.type === 'keyword') {
                  return (
                    <TooltipDefinition
                      align="center"
                      direction="top"
                      key={`transcript-keyword-${overallIndex}-${elementIndex}`}
                      tooltipText={
                        <KeywordTooltip
                          confidence={element.confidence}
                          startTime={element.startTime}
                          endTime={element.endTime}
                        />
                      }
                      triggerClassName="keyword-info-trigger"
                    >
                      {element.text}
                    </TooltipDefinition>
                  );
                }
                return null;
              })}
            </div>
          );
        })}
      </div>
      <Button onClick={handleGo} type="button">
        Go
      </Button>
      <Link to="/dashboard">
        See Dashboard
      </Link>

    </>
  );
};

TranscriptBox.propTypes = {
  keywordInfo: PropTypes.arrayOf(PropTypes.object),
  transcriptArray: PropTypes.arrayOf(PropTypes.object),
};

TranscriptBox.defaultProps = {
  keywordInfo: [],
  transcriptArray: [],
};

export default TranscriptBox;
