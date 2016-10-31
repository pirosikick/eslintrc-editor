import React, { Component } from 'react';
import { connect } from 'react-redux';
import schema from 'eslint-rule-schemata/eslint/3.9.0/schema.json';

import outputActions from '../actions/output';

import Wrapper from './Wrapper';
import Main from './Main';
import SideMenu from './SideMenu';
import OptionGroup from './OptionGroup';
import RadioSet from './RadioSet';
import Globals from './Globals';
import Env from './Env';
import EcmaFeatures from './EcmaFeatures';
import Parser from './Parser';
import MarkdownViewer from './MarkdownViewer';
import Preview from './Preview';
import Rules from './Rules';
import Menu from './Menu';

const { setEcmaOrParser } = outputActions;

class App extends Component {
  render() {
    const { view, output, dispatch } = this.props;

    return (
      <div className="app">
        <Wrapper className="pure-g">
          <Main className="pure-u-17-24">
            <Menu selectedItem={view.selectedMenuItem} onAction={dispatch} />
            <div className="main__contents">
              {
                (selectedMenuItem => {
                  if (selectedMenuItem === 'preview') {
                    return (
                      <Preview target={output} onAction={dispatch} />
                    );
                  }
                  return (
                    <MarkdownViewer
                      url={view.documentUrl}
                      md={view.documentMarkdown}
                      onAction={dispatch}
                    />
                  );
                })(view.selectedMenuItem)
              }
            </div>
          </Main>

          <SideMenu className="pure-u-7-24">
            <OptionGroup name="Environments">
              <Env values={output.env} onAction={dispatch} />
            </OptionGroup>

            <OptionGroup name="Globals">
              <Globals value={output.globals} onAction={dispatch} />
            </OptionGroup>

            <OptionGroup name="ecmaFeatures | parser">
              <RadioSet
                name="ecma-or-parser"
                options={[
                  { value: '', label: 'none' },
                  { value: 'ecmaFeatures', label: 'use ecmaFeatures option' },
                  { value: 'parser', label: 'use parser option' },
                ]}
                defaultValue={output.ecmaOrParser}
                onChange={({ value }) => dispatch(setEcmaOrParser(value))}
              />

              {
                (ecmaOrParser => {
                  if (ecmaOrParser === 'ecmaFeatures') {
                    return (
                      <div className="option">
                        <h4 className="option__title">ecmaFeatures</h4>
                        <EcmaFeatures values={output.ecmaFeatures} onAction={dispatch} />
                      </div>
                    );
                  } else if (ecmaOrParser === 'parser') {
                    return (
                      <div className="option parser-option">
                        <h4 className="option__title">parser</h4>
                        <Parser value={output.parser} onAction={dispatch} />
                      </div>
                    );
                  }
                  return null;
                })(output.ecmaOrParser)
              }

            </OptionGroup>

            <OptionGroup name="Rules">
              <Rules value={output.rules} schema={schema} onAction={dispatch} />
            </OptionGroup>

          </SideMenu>

        </Wrapper>
      </div>
    );
  }
}

export default connect(state => ({
  view: state.view.toJS(),
  output: state.output.toJS(),
}))(App);
