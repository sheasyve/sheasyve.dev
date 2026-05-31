import React from 'react';

function ContestsSection() {

    const myContests = [
        {
            url: "https://leetcode.com/u/sheasyve",
            name: "Leetcode Weekly Contests",
            lang: " (Python)",
            extraInfo: "570+ Problems Solved",
            rankBold: "361,023",
            rankTotal: "874,223",
            hasC3Wrapper: false
        },
        {
            url: "https://www.codingame.com/multiplayer/clashofcode/leaderboard",
            name: "Clash of Code - Short Programming Contests",
            lang: " (Python)",
            extraInfo: null,
            rankBold: "384",
            rankTotal: "719,426",
            hasC3Wrapper: false
        },
        {
            url: "https://www.codingame.com/multiplayer/bot-programming/fantastic-bits/leaderboard?column=keyword&value=sheasyve",
            name: 'Codingame "Fantastic Bits" Bot Programming Contest',
            lang: " (C++)",
            extraInfo: null,
            rankBold: "832",
            rankTotal: "3,789",
            hasC3Wrapper: true
        }
    ];

    return (
        <>
            <h3>Programming Contests</h3>
            <div className="contest-list">
                {myContests.map((contest, i) => {
                    const linkElement = (
                        <a href={contest.url} target="_blank" className="contest">
                            <h4>
                                <span className="contest_info">
                                    {contest.name}
                                    <span className="project_info">{contest.lang}</span>
                                    {contest.extraInfo && (<span className="problems"> {contest.extraInfo}</span>)}
                                </span>
                                <span className="rank">Highest Rank: <b>{contest.rankBold}</b> / {contest.rankTotal}</span>
                            </h4>
                        </a>
                    );

                    return (
                        <div className="contest" key={i}>
                            {contest.hasC3Wrapper ? (
                                <div className="c3">
                                    {linkElement}
                                </div>
                            ) : (
                                linkElement
                            )}
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default ContestsSection;