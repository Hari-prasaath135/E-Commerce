import React from 'react';

export type EcoScoreValue = {
  score?: number | null;
  rating?: string | null;
  summary?: string | null;
  factors?: string[];
  tags?: string[];
};

type EcoScoreProps = EcoScoreValue & {
  compact?: boolean;
};

const scoreTone = (score: number) => {
  if (score >= 80) return 'eco-score--excellent';
  if (score >= 60) return 'eco-score--good';
  if (score >= 40) return 'eco-score--moderate';
  return 'eco-score--improve';
};

const scoreLabel = (score: number) => {
  if (score >= 80) return 'Excellent';
  if (score >= 60) return 'Good';
  if (score >= 40) return 'Moderate';
  return 'Needs improvement';
};

const EcoScore = ({ score, rating, summary, factors = [], tags = [], compact = false }: EcoScoreProps) => {
  const hasScore = typeof score === 'number' && Number.isFinite(score);
  const boundedScore = hasScore ? Math.min(100, Math.max(0, Math.round(score))) : null;

  if (!hasScore) {
    return (
      <div className={`eco-pending ${compact ? 'eco-pending--compact' : ''}`} title="Sustainability information is not available yet">
        <span aria-hidden="true">🌱</span>
        <span>Eco score pending</span>
      </div>
    );
  }

  const label = rating || scoreLabel(boundedScore as number);

  return (
    <div className={`eco-score ${scoreTone(boundedScore as number)} ${compact ? 'eco-score--compact' : ''}`}>
      <div className="eco-score__heading">
        <span className="eco-score__leaf" aria-hidden="true">🌱</span>
        <span>Eco score</span>
        <strong>{boundedScore}/100</strong>
      </div>
      <div className="eco-score__bar" aria-hidden="true">
        <span style={{ width: `${boundedScore}%` }} />
      </div>
      <span className="eco-score__label">{label}</span>
      {!compact && (summary || factors.length > 0 || tags.length > 0) && (
        <div className="eco-score__details">
          {summary && <p>{summary}</p>}
          {tags.length > 0 && <div className="eco-score__tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>}
          {factors.length > 0 && (
            <ul>
              {factors.map((factor) => <li key={factor}>{factor}</li>)}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default EcoScore;
