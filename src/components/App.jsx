import {Component} from "react";
import {connect} from 'react-redux';

import {setEcmaOrParser} from '../actions/view';

import Header from './Header.jsx';
import Wrapper from './Wrapper.jsx';
import Main from './Main.jsx';
import SideMenu from './SideMenu.jsx';
import OptionGroup from './OptionGroup.jsx';
import CheckList from './CheckList.jsx';
import RadioSet from './RadioSet.jsx';
import Globals from './Globals.jsx';
import Env from './Env.jsx';
import EcmaFeatures from './EcmaFeatures.jsx';
import Parser from './Parser.jsx';
import MarkdownViewer from './MarkdownViewer.jsx';
import Preview from './Preview.jsx';
import Rules from './Rules.jsx';
import {Menu} from './Menu.jsx';
import ruleSchema from "../constants/eslintRuleSchema.json";

@connect(state => ({
  view: state.view.toJS(),
  output: state.output.toJS(),
}))
export default
  class App extends Component {
    render () {
      let {view, output, dispatch} = this.props;

      return (
        <div className="app">
          <Wrapper className="pure-g">
            <Main className="pure-u-17-24">
              <Menu selectedItem={view.selectedMenuItem} onAction={dispatch}/>
              <div className="main__contents">
              {
                (selectedMenuItem => {
                  if (selectedMenuItem === 'preview') {
                    return (
                      <Preview
                        target={output}
                        ecmaOrParser={view.ecmaOrParser}
                        onAction={dispatch}/>
                    );
                  } else {
                    return (
                      <MarkdownViewer
                        url={view.documentUrl}
                        md={view.documentMarkdown}
                        onAction={dispatch}/>
                    );
                  }
                })(view.selectedMenuItem)
              }
              </div>
            </Main>

            <SideMenu className="pure-u-7-24">
              <OptionGroup name="Environments">
                <Env values={output.env} onAction={dispatch}/>
              </OptionGroup>

              <OptionGroup name="Globals">
                <Globals value={output.globals} onAction={dispatch}/>
              </OptionGroup>

              <OptionGroup name="ecmaFeatures | parser">
                <RadioSet
                  name="ecma-or-parser"
                  options={[
                    {value: "", label: "none"},
                    {value: "ecmaFeatures", label: "use ecmaFeatures option"},
                    {value: "parser", label: "use parser option"}
                  ]}
                  defaultValue={view.ecmaOrParser}
                  onChange={({value}) => dispatch(setEcmaOrParser(value))} />

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
                          <Parser value={output.parser} onAction={dispatch}/>
                        </div>
                      );
                    }
                  })(view.ecmaOrParser)
                }

              </OptionGroup>

              <OptionGroup name="Rules">
                <Rules value={output.rules} schema={ruleSchema} onAction={dispatch} />
              </OptionGroup>

            </SideMenu>

          </Wrapper>
        </div>
      );
    }
  }
