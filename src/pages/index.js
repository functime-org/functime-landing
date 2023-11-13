import * as React from 'react';

const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: '#663399',
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: '#8954A8',
  fontWeight: 'bold',
  fontSize: 16,
  verticalAlign: '5%',
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: 'none',
  marginBottom: 24,
};

const descriptionStyle = {
  color: '#232129',
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLink = {
  text: 'GitHub repo',
  url: 'https://github.com/TracecatHQ/functime',
  color: '#8954A8',
};

const badgeStyle = {
  color: '#fff',
  backgroundColor: '#088413',
  border: '1px solid #088413',
  fontSize: 11,
  fontWeight: 'bold',
  letterSpacing: 1,
  borderRadius: 4,
  padding: '4px 6px',
  display: 'inline-block',
  position: 'relative',
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

const links = [
  {
    text: 'Documentation',
    url: 'https://docs.functime.ai',
    description:
      "The goto reference and guide to learn about functime.",
    color: '#E95800',
  },
  {
    text: 'Tutorial',
    url: 'https://docs.functime.ai/forecasting/',
    description:
      "A great place to get started if you're new to ML forecasting. Designed to guide you through your first end-to-end forecasting pipeline.",
    color: '#1099A8',
  },
  {
    text: 'Evaluation Procedure',
    url: 'https://docs.functime.ai/notebooks/evaluation/',
    description:
      "Scoring, ranking, and plotting functions to help you evaluate thousands of forecasts at the same time.",
    color: '#BC027F',
  },
  {
    text: 'LLM Forecast Analysts',
    url: 'https://docs.functime.ai/notebooks/llm/',
    description:
      'Your AI copilot to analyze and compare the trend, seasonality, and causal factors across any forecast.',
    color: '#0D96F2',
  },
  {
    text: 'API Reference',
    url: 'https://docs.functime.ai/ref/forecasting/',
    description:
      "Detailed information about functime's API.",
    color: '#8EB814',
  },
];

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        functime
        <br />
        <span style={headingAccentStyles}>
          — Time-series machine learning at scale.
        </span>
      </h1>
      <p style={paragraphStyles}>
        <code style={codeStyles}>pip install functime</code>
      </p>
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${docLink.url}`}
          >
            {docLink.text}
          </a>
        </li>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}`}
              >
                {link.text}
              </a>
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>functime | Time-series machine learning at scale.</title>;
