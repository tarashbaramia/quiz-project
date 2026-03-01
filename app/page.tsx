'use client';

import { useState, useEffect } from 'react';

type Personality = {
  name: string;
  tagline: string;
  coffee: string;
  emoji: string;
};

const personalities: Personality[] = [
  {
    name: 'Bold Adventurer',
    tagline: 'You live life at full intensity. Pure, powerful, no apologies.',
    coffee: 'Double Espresso',
    emoji: '🔥',
  },
  {
    name: 'Zen Minimalist',
    tagline: 'Simplicity is your superpower. You find beauty in the details.',
    coffee: 'Single-Origin Pour Over',
    emoji: '🍃',
  },
  {
    name: 'Social Butterfly',
    tagline: 'You bring warmth wherever you go. Life is better shared.',
    coffee: 'Oat Milk Latte',
    emoji: '🦋',
  },
  {
    name: 'Practical Pragmatist',
    tagline: 'Reliable, efficient, and always delivers. Just like you.',
    coffee: 'Cold Brew',
    emoji: '⚡',
  },
];

type Option = { label: string; emoji: string; personality: number };
type Question = { text: string; options: Option[] };

const questions: Question[] = [
  {
    text: 'How do you typically start your morning?',
    options: [
      { emoji: '🚀', label: 'Jump up ready to conquer the day', personality: 0 },
      { emoji: '🧘', label: 'Ease in with quiet meditation', personality: 1 },
      { emoji: '📱', label: 'Check in with friends right away', personality: 2 },
      { emoji: '☕', label: 'Follow my reliable daily routine', personality: 3 },
    ],
  },
  {
    text: 'What is your ideal weekend activity?',
    options: [
      { emoji: '🪂', label: 'Something thrilling and spontaneous', personality: 0 },
      { emoji: '🌲', label: 'A solo hike in quiet nature', personality: 1 },
      { emoji: '🥳', label: 'Brunch with a big group of friends', personality: 2 },
      { emoji: '📋', label: 'Getting my to-do list done', personality: 3 },
    ],
  },
  {
    text: 'How do you handle a stressful situation?',
    options: [
      { emoji: '⚡', label: 'Face it head-on, no hesitation', personality: 0 },
      { emoji: '🌊', label: 'Breathe deeply and take it slowly', personality: 1 },
      { emoji: '💬', label: 'Talk it through with friends', personality: 2 },
      { emoji: '📝', label: 'Make a list and work through it', personality: 3 },
    ],
  },
  {
    text: 'Pick your travel style:',
    options: [
      { emoji: '🗺️', label: 'Off the beaten path, totally unplanned', personality: 0 },
      { emoji: '🏯', label: 'One destination, deep slow travel', personality: 1 },
      { emoji: '🚌', label: 'Group tour, meet lots of new people', personality: 2 },
      { emoji: '✈️', label: 'Carefully planned itinerary', personality: 3 },
    ],
  },
  {
    text: 'Which best describes your work style?',
    options: [
      { emoji: '💡', label: 'Creative risk-taker, thinks big', personality: 0 },
      { emoji: '🎯', label: 'Deep focus, clean minimal workspace', personality: 1 },
      { emoji: '🤝', label: 'Team-first, loves collaboration', personality: 2 },
      { emoji: '📊', label: 'Efficient and results-driven', personality: 3 },
    ],
  },
];

const bgStyle: React.CSSProperties = {
  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #fda085 100%)',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '24px',
  fontFamily: 'var(--font-nunito), Nunito, sans-serif',
};

const cardStyle: React.CSSProperties = {
  background: 'white',
  maxWidth: '540px',
  width: '100%',
  boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
};

const buttonStyle: React.CSSProperties = {
  background: 'linear-gradient(135deg, #f5576c, #fda085)',
  color: 'white',
  border: 'none',
  borderRadius: '50px',
  padding: '16px 32px',
  fontSize: '18px',
  fontWeight: '700',
  width: '100%',
  cursor: 'pointer',
  marginTop: '24px',
  fontFamily: 'inherit',
};

export default function QuizPage() {
  const [screen, setScreen] = useState<'intro' | 'quiz' | 'loading' | 'result'>('intro');
  const [currentQ, setCurrentQ] = useState(0);
  const [tally, setTally] = useState([0, 0, 0, 0]);
  const [selected, setSelected] = useState<number | null>(null);

  function startQuiz() {
    setScreen('quiz');
    setCurrentQ(0);
    setTally([0, 0, 0, 0]);
    setSelected(null);
  }

  function handleNext() {
    if (selected === null) return;
    const newTally = [...tally];
    newTally[selected] += 1;
    if (currentQ + 1 >= questions.length) {
      setTally(newTally);
      setScreen('loading');
    } else {
      setTally(newTally);
      setCurrentQ(currentQ + 1);
      setSelected(null);
    }
  }

  useEffect(() => {
    if (screen === 'loading') {
      const timer = setTimeout(() => setScreen('result'), 1800);
      return () => clearTimeout(timer);
    }
  }, [screen]);

  function getResult(): Personality {
    return personalities[tally.indexOf(Math.max(...tally))];
  }

  // --- Intro Screen ---
  if (screen === 'intro') {
    return (
      <div style={bgStyle}>
        <div style={cardStyle} className="quiz-card">
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>☕</div>
            <h1 className="quiz-intro-title" style={{ fontWeight: '800', color: '#333', marginBottom: '16px', lineHeight: 1.2 }}>
              What&apos;s Your Coffee Personality?
            </h1>
            <p style={{ color: '#888', fontSize: '16px', lineHeight: 1.6 }}>
              Answer 5 quick questions to discover which coffee matches your true self.
            </p>
            <button style={buttonStyle} onClick={startQuiz}>
              Start Quiz ✨
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- Quiz Screen ---
  if (screen === 'quiz') {
    const q = questions[currentQ];
    return (
      <div style={bgStyle}>
        <div style={cardStyle} className="quiz-card">
          {/* Progress bar */}
          <div style={{ marginBottom: '28px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: '700', color: '#f5576c' }}>
                Question {currentQ + 1} of {questions.length}
              </span>
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#bbb' }}>
                {Math.round(((currentQ + 1) / questions.length) * 100)}%
              </span>
            </div>
            <div style={{ background: '#eee', borderRadius: '50px', height: '8px', overflow: 'hidden' }}>
              <div style={{
                background: 'linear-gradient(135deg, #f5576c, #fda085)',
                height: '100%',
                width: `${((currentQ + 1) / questions.length) * 100}%`,
                borderRadius: '50px',
                transition: 'width 0.4s ease',
              }} />
            </div>
          </div>

          {/* Question */}
          <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#333', marginBottom: '24px', textAlign: 'center' }}>
            {q.text}
          </h2>

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {q.options.map((option, i) => (
              <button
                key={i}
                onClick={() => setSelected(option.personality)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px 20px',
                  border: `2px solid ${selected === option.personality ? '#f5576c' : '#eee'}`,
                  borderRadius: '16px',
                  background: selected === option.personality ? '#fff5f7' : 'white',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#333',
                  transition: 'all 0.2s',
                  fontFamily: 'inherit',
                }}
              >
                <span style={{ fontSize: '24px' }}>{option.emoji}</span>
                <span>{option.label}</span>
              </button>
            ))}
          </div>

          {/* Next button */}
          <button
            style={{
              ...buttonStyle,
              opacity: selected === null ? 0.5 : 1,
              cursor: selected === null ? 'not-allowed' : 'pointer',
            }}
            onClick={handleNext}
            disabled={selected === null}
          >
            {currentQ + 1 >= questions.length ? 'See My Result 🎉' : 'Next →'}
          </button>
        </div>
      </div>
    );
  }

  // --- Loading Screen ---
  if (screen === 'loading') {
    return (
      <div style={bgStyle}>
        <div style={cardStyle} className="quiz-card">
          <div style={{ textAlign: 'center' }}>
            <div style={{ position: 'relative', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              <span className="coffee-center" style={{ fontSize: '60px', position: 'absolute' }}>☕</span>
              <span className="coffee-left"   style={{ fontSize: '48px', position: 'absolute' }}>☕</span>
              <span className="coffee-right"  style={{ fontSize: '48px', position: 'absolute' }}>☕</span>
            </div>
            <p className="brewing-text" style={{ color: '#f5576c', fontWeight: '700', fontSize: '18px' }}>
              Brewing your result...
            </p>
          </div>
        </div>
      </div>
    );
  }

  // --- Result Screen ---
  const result = getResult();
  return (
    <div style={bgStyle}>
      <div style={cardStyle} className="quiz-card">
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '72px', marginBottom: '16px' }}>{result.emoji}</div>
          <p style={{ color: '#f5576c', fontWeight: '700', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>
            Your Coffee Personality
          </p>
          <h2 className="quiz-result-name" style={{ fontWeight: '800', color: '#333', marginBottom: '16px' }}>
            {result.name}
          </h2>
          <p style={{ color: '#666', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>
            {result.tagline}
          </p>
          <div style={{
            background: 'linear-gradient(135deg, #fff5f7, #fff)',
            border: '2px solid #f5576c',
            borderRadius: '20px',
            padding: '20px 24px',
            marginBottom: '8px',
          }}>
            <p style={{ color: '#aaa', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
              Your Perfect Brew
            </p>
            <p style={{ fontSize: '22px', fontWeight: '800', color: '#f5576c' }}>
              ☕ {result.coffee}
            </p>
          </div>
          <button
            style={buttonStyle}
            onClick={() => {
              const text = `I got "${result.name}" on the Coffee Personality Quiz! My perfect brew: ${result.coffee} ${result.emoji}`;
              if (navigator.share) {
                navigator.share({ title: "My Coffee Personality", text, url: 'https://quiz-project-beta-teal.vercel.app' });
              } else {
                navigator.clipboard.writeText(text + '\nhttps://quiz-project-beta-teal.vercel.app');
                alert('Copied to clipboard!');
              }
            }}
          >
            Share My Result 🔗
          </button>
          <button style={{ ...buttonStyle, marginTop: '12px', background: 'transparent', color: '#aaa', border: '2px solid #eee' }} onClick={startQuiz}>
            Retake Quiz 🔄
          </button>
        </div>
      </div>
    </div>
  );
}
