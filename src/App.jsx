import React, { useState, useEffect } from 'react';
import './App.css';

const rawPassages = [
  {
    id: 'textB-A', 
    title: 'Text B-A',
    text: `“Did you see that?” Joe said to his friend Bill. “You’re a great shooter!”
Bill caught the basketball and bounced it before throwing it again. The ball flew into the net.
“Bill, you never miss!” Joe said admiringly.
“Unless I’m in a real game,” Bill complained. “Then I miss all the time.”
Joe knew that Bill was right. Bill <u>(A) performed</u> much better when he was having fun with Joe in the school yard than he did when he was playing for the school team in front of a large crowd.
“Maybe you just need to practice more,” Joe suggested.
“But I practice all the time with you!” Bill objected. He shook his head. “I just can’t play well when people are watching me.”
“You play well when I’m watching,” Joe pointed out.
“That’s because I’ve known you since we were five years old,” Bill said with a smile. “I’m just not comfortable playing when other people are around.”
Joe nodded and understood, but he also had an idea.
The next day Joe and Bill met in the school yard again to practice. After a few minutes, Joe excused himself.
“Practice without me,” Joe said to his friend. “I’ll be back in a minute.”
Joe hurried through the school building, gathering together whomever he could find—two students, a math teacher, two secretaries, and a janitor.
When Joe explained why he needed them, everyone was happy to help.
Joe reminded the group to stay quiet as they all went toward the school’s basketball court. As Joe had hoped, Bill was still practicing basketball. He made five baskets in a row without noticing the silent people standing behind him.
“Hey, Bill!” Joe called out finally.
Bill turned. A look of surprise came over his face.
“I just wanted to show you that you could play well with people watching you,” Joe said. “Now you’ll have nothing to worry about for the next game!”`,
    questions: [
      { question: 'What would be the best title for the story?', choices: ['A) Joe Joins the Team', 'B) Practice Makes Perfect', 'C) Bill Wins the Big Game', 'D) Bill’s Basketball Problem'], answer: 'd' },
      { question: 'The underlined word <u>(A) performed</u> is closest in meaning to _______.', choices: ['A) acted', 'B) played', 'C) moved', 'D) changed'], answer: 'b' },
      { question: 'Why is Bill upset?', choices: ['A) He plays better in practice than he does during games.', 'B) The school yard is not a good place to practice.', 'C) Joe watches him too closely when he plays.', 'D) His team loses too many games.'], answer: 'a' },
      { question: 'Why does Bill play well when Joe is watching him?', choices: ['A) He is comfortable with Joe.', 'B) Joe tells him how to play better.', 'C) He does not know that Joe is there.', 'D) He wants to prove to Joe that he is a good player.'], answer: 'a' },
      { question: 'Why does Joe decide to gather a group of people?', choices: ['A) Because he wants more players for his team', 'B) Because he wants to help Bill feel less nervous', 'C) Because he wants to show them his talent', 'D) Because he wants more people to see the next game'], answer: 'b' },
      { question: 'At the end of the story, all of the following people watch Bill practice EXCEPT _______.<br>*except: ~를 제외하고', choices: ['A) Joe', 'B) a janitor', 'C) a math teacher', 'D) the basketball coach'], answer: 'd' },
      { question: 'Why does the group have to be quiet when they go to the basketball court?', choices: ['A) Because Joe is telling Bill what to do', 'B) Because they do not want Bill to know they are there', 'C) Because Bill likes to practice alone', 'D) Because the group needs to listen to Joe’s instructions'], answer: 'b' }
    ]
  },
  {
    id: 'textB-B',
    title: 'Text B-B',
    text: `Last Saturday, the students in Mr. Marshall’s social studies class held the school’s first-ever Current Events Awareness Day. The students themselves came up with the idea for the event. 
As part of their regular studies, Mr. Marshall asks his students to read the newspaper every day and to follow topics that they find particularly interesting.
The students became <u>(A) knowledgeable</u> about a number of current events and wanted to get other students from outside their class more interested in the news.
For the event, Mr. Marshall’s students formed into five small groups. Each group focused on a particular area in current events. The main areas included politics, the environment, the economy, science, and international relations.
The students prepared posters and short presentations about their topics, which <u>(B) they</u> then shared with the 230 people who attended the event.
Mr. Marshall was very proud of his students and impressed with the work they had done.
“They made the information easy for everyone to understand,” he said. “They even made it entertaining!”
Mr. Marshall hopes the event will become a new school tradition that will take place each year.`,
    questions: [
      { question: 'Which headline best summarizes the article?', choices: ['A) Students Focus on Current Events', 'B) Five Issues Students Care About Most', 'C) Student Newspaper Read by Hundreds', 'D) Teacher’s Presentation Inspires Students'], answer: 'a' },
      { question: 'The underlined word <u>(A) knowledgeable</u> is closest in meaning to _______.', choices: ['A) encouraged', 'B) bored', 'C) informed', 'D) well-known'], answer: 'c' },
      { question: 'According to the article, what assignment does Mr. Marshall regularly give his students?', choices: ['A) Reading the newspaper', 'B) Giving class presentations', 'C) Doing research at the library', 'D) Writing about current events'], answer: 'a' },
      { question: 'According to the article, what made each student group different from the others?', choices: ['A) The number of people in it', 'B) The schedule it had to follow', 'C) The kind of materials it made', 'D) The current events it discussed'], answer: 'd' },
      { question: 'The underlined word <u>(B) they</u> refers to _______.', choices: ['A) topics', 'B) posters', 'C) students', 'D) presentations'], answer: 'c' },
      { question: 'Based on his comments, what did Mr. Marshall think about the event?', choices: ['A) It was difficult to plan.', 'B) It was larger than expected.', 'C) It was both educational and fun.', 'D) It was better than last year’s event.'], answer: 'c' }
    ]
  },
  {
    id: 'textB-C',
    title: 'Text B-C',
    text: `Being able to land safely is a critically important skill for all flying animals. Whereas <u>(A) terrestrial</u> animals face no particular challenge when they need to stop running or crawling, flying animals move at much higher speeds, and they must be careful about how they land. Hitting the ground, or even water, at full flight speed would be quite dangerous. Before touching down, they must decrease their speed in order to land safely. Both bats and birds have mastered the skill of landing, but these two types of flyers go about it quite differently.

In the past it was believed that, in terms of flying mechanics, there was little difference between bats and birds. This belief was based only on assumption, however, because for years nobody had actually studied in graphic detail how bats move their wings. In recent years, though, researchers have discovered a number of interesting facts about bat flight. Bats are built differently from birds, and their wings <u>(B) incorporate</u> both their front and hind limbs. This makes coordinating their limbs more difficult for bats and, as a result, they are not very good at flying over longer distances. However, they are much better at maneuverability: a bat can quickly change its direction of flight or completely reverse <u>(C) it</u>, something a bird cannot easily do.

Another interesting characteristic of bat flight is the way in which bats land—upside down! Unlike birds, which touch down on the ground or on tree branches, bats can be observed flying around and then suddenly hanging upside down from an object overhead. How do they do it? A group of researchers recently used video cameras to film bats landing on nets <u>(D) suspended</u> from the ceiling of their laboratory and studied the recordings in slow motion. They painted spots on the bats’ wings to see in detail what happens to the wings in flight and during touchdown. It turns out that the bats flew in a straight line up to the net and then quickly flipped over and attached themselves to it upside down. One downside to this landing routine is that the bats often <u>(E) slam</u> into their landing spot with some force, which probably causes pain. However, not all bats hit their landing spots with the same speed and force; these will vary depending on the area where a bat species makes its home. For example, a cave bat, which regularly perches on a hard stone ceiling, is more careful about its landing preparation than a bat more accustomed to landing in leafy treetops.`,
    questions: [
      { question: 'What is the main topic of the passage?', choices: ['A) Places where flying animals choose to land', 'B) Why scientists have difficulty observing bats', 'C) Differences in the eating habits of bats and birds', 'D) Ways in which bats move differently from birds'], answer: 'd' },
      { question: 'The underlined word <u>(A) terrestrial</u> is closest in meaning to _______.', choices: ['A) high-flying', 'B) fast-moving', 'C) tree-climbing', 'D) ground-living'], answer: 'd' },
      { question: 'According to the passage, what skill is crucial for flying animals?', choices: ['A) Diving underwater', 'B) Slowing down to land', 'C) Flying over great distances', 'D) Balancing on high branches'], answer: 'b' },
      { question: 'Which of the following is a false assumption about bats that was recently corrected?', choices: ['A) They cannot hear.', 'B) They sleep upside down.', 'C) They fly similarly to birds.', 'D) They hide in tree branches.'], answer: 'c' },
      { question: 'According to the passage, what is an advantage that bats have over birds?', choices: ['A) Bats can land on a greater variety of surfaces.', 'B) Bats can turn in the air more quickly.', 'C) Bats can eat while flying.', 'D) Bats are lighter.'], answer: 'b' },
      { question: 'The underlined word <u>(B) incorporate</u> is closest in meaning to _______.', choices: ['A) add', 'B) deliver', 'C) include', 'D) discover'], answer: 'c' },
      { question: 'The underlined word <u>(C) it</u> refers to _______.', choices: ['A) bat', 'B) bird', 'C) direction', 'D) maneuverability'], answer: 'c' },
      { question: 'The researchers used all of the following to study bats EXCEPT _______.<br>*except: ~를 제외하고', choices: ['A) nets', 'B) paint', 'C) cables', 'D) cameras'], answer: 'c' },
      { question: 'The underlined word <u>(D) suspended</u> is closest in meaning to _______.', choices: ['A) hanging', 'B) entering', 'C) falling', 'D) living'], answer: 'a' },
      { question: 'The underlined word <u>(E) slam</u> is closest in meaning to _______.', choices: ['A) crash', 'B) bring', 'C) break', 'D) change'], answer: 'a' },
      { question: 'According to the passage, what helps determine a bat’s landing speed?', choices: ['A) What it eats', 'B) How old it is', 'C) How big it is', 'D) Where it lives'], answer: 'd' }
    ]
  }
];



function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function App() {
  const [info, setInfo] = useState({ grade: '2학년', class: '', number: '', name: '' });
  const [started, setStarted] = useState(false);
  const [passages, setPassages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [timeLeft, setTimeLeft] = useState(1800); // 30분
  const [submitted, setSubmitted] = useState(false);
  const [autoSubmitted, setAutoSubmitted] = useState(false);

  useEffect(() => {
    if (started) {
      setPassages(shuffleArray(rawPassages));
    }
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [started]);

  const handleSelect = (qid, choice) => {
    setResponses(prev => ({ ...prev, [qid]: choice }));
  };

  const handleSubmit = async (auto = false) => {
    if (!auto && !window.confirm('제출하시겠습니까?')) return;

    const results = [];
    passages.forEach((p) => {
      p.questions.forEach((q, idx) => {
        const qid = `${p.id}_q${idx}`;
        results.push({
          grade: info.grade,
          class: info.class,
          number: info.number,
          name: info.name,
          passage: p.id,
          question: q.question,
          selected: responses[qid] || '',
          correct: q.answer,
          isCorrect: (responses[qid] || '') === q.answer
        });
      });
    });

    try {
      await fetch('https://sheetdb.io/api/v1/x3i64idfqyd0q', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: results })
      });
      setSubmitted(true);
      if (auto) setAutoSubmitted(true);
    } catch (e) {
      alert('제출 중 오류 발생: ' + e.message);
    }
  };

  if (!started) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'sans-serif',
        padding: '2rem',
        backgroundColor: '#f5f7fa',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>📖 영어 읽기 시험</h1>
        <p style={{ marginBottom: '2rem', color: '#555' }}>
          아래 정보를 정확히 입력하고<br />‘시험 시작’ 버튼을 눌러주세요.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
          <div style={{ textAlign: 'left', fontWeight: 'bold' }}>
            학년: <span style={{ marginLeft: '0.5rem' }}>{info.grade}</span>
          </div>

          <label style={{ textAlign: 'left' }}>
            반:
            <select
              value={info.class}
              onChange={e => setInfo({ ...info, class: e.target.value })}
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
            >
              <option value=''>선택</option>
              {[...Array(8)].map((_, i) => (
                <option key={i} value={`${i + 1}반`}>{`${i + 1}반`}</option>
              ))}
            </select>
          </label>

          <label style={{ textAlign: 'left' }}>
            번호:
            <input
              type="text"
              value={info.number}
              onChange={e => setInfo({ ...info, number: e.target.value })}
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
            />
          </label>

          <label style={{ textAlign: 'left' }}>
            이름:
            <input
              type="text"
              value={info.name}
              onChange={e => setInfo({ ...info, name: e.target.value })}
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
            />
          </label>

          <button
            onClick={() => setStarted(true)}
            style={{
              marginTop: '1rem',
              padding: '0.75rem',
              backgroundColor: '#007BFF',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            시험 시작 / Start
          </button>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        {autoSubmitted ? (
          <h2>⏰ 시간이 종료되었습니다.<br />응답은 자동으로 저장되어 제출되었습니다.</h2>
        ) : (
          <h2>제출이 완료되었습니다. 감사합니다!</h2>
        )}
      </div>
    );
  }

  const current = passages[currentIndex];
  if (!current) return <div>Loading...</div>;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
  <div style={{ display: 'flex', height: '100vh' }}>
    <div style={{ flex: 3, padding: '1rem', overflow: 'auto', touchAction: 'manipulation' }}>
      <h3 style={{ textAlign: 'center' }}>{current.title}</h3>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', textAlign: 'left' }}
         dangerouslySetInnerHTML={{ __html: current.text }}
      ></p>
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <button disabled={currentIndex === 0} onClick={() => setCurrentIndex(currentIndex - 1)}>이전</button>
        <button disabled={currentIndex === passages.length - 1} onClick={() => setCurrentIndex(currentIndex + 1)} style={{ marginLeft: '1rem' }}>다음</button>
      </div>
      <div style={{ marginTop: '2rem', fontSize: '1rem', color: '#333', textAlign: 'center' }}>
        ⏰ 남은 시간: {minutes}:{seconds.toString().padStart(2, '0')}
      </div>
    </div>

    <div style={{ flex: 2, padding: '1rem', overflowY: 'auto', textAlign: 'left' }}>
      {current.questions.map((q, idx) => {
        const qid = `${current.id}_q${idx}`;
        return (
          <div key={idx} style={{ marginBottom: '1.5rem' }}>
            <div dangerouslySetInnerHTML={{ __html: `<strong>Q${idx + 1}.</strong> ${q.question}`}}></div>

            {q.choices.map((c, i) => (
              <div key={i}>
                <label>
                  <input
                    type="radio"
                    name={qid}
                    checked={responses[qid] === c.charAt(0).toLowerCase()}
                    onChange={() => handleSelect(qid, c.charAt(0).toLowerCase())}
                  /> {c}
                </label>
              </div>
            ))}
          </div>
        );
      })}

      {currentIndex === passages.length - 1 && (
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <button onClick={() => handleSubmit(false)}>제출 / Submit</button>
        </div>
      )}
    </div>
  </div>
);

}

export default App;
