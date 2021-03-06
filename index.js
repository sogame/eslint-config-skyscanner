/*
 Copyright 2017 Skyscanner
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['backpack'],
  rules: {
    'valid-jsdoc': ['error'],
    'backpack/use-tokens': 'error',
    'backpack/use-components': 'error',

    // This rule is purely subjective and for consistency sake.
    // The impact of turning this on outweighs our perceived benefit of enforcing it
    'react/destructuring-assignment': 'off',

    // Disabled whilst incompatibilities still exist with react/jsx-closing-tag-location, react/jsx-indent & max-len.
    // See https://github.com/airbnb/javascript/issues/1584#issuecomment-335667272
    'function-paren-newline': 'off',

    // Disabled whilst false positives still exist with custom propTypes + isRequired.
    // See https://github.com/yannickcr/eslint-plugin-react/issues/1389
    'react/no-typos': 'off',

    // One JSX Element Per Line
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-one-expression-per-line.md
    // https://github.com/airbnb/javascript/commit/b6a268f780177e03b573a4f0df95ecc0d2e8783e#diff-c0191b2bdd5bfebebb8cec31d0f3993c
    // TODO: re-enable when an option for text children is available
    'react/jsx-one-expression-per-line': 'off',

    // Added 'to' as a specialLink property, which prevents react-router's
    // 'Link' component from triggering this rule.
    // See https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/339
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],

    // Modified from upstream eslint configuration to assert 'either' as opposed to 'both'.
    // See https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react-a11y.js#L61.
    'jsx-a11y/label-has-associated-control': ['error', {
      labelComponents: [],
      labelAttributes: [],
      controlComponents: [],
      assert: 'either',
      depth: 25
    }],
  },
};
