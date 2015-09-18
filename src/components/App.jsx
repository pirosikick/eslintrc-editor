import React, {Component, PropTypes} from "react";
import {connect} from 'react-redux';
import {selectMenuItem, showPreview, openDocument, openRuleDocument, setEcmaOrParser} from '../actions/view';
import {setEnv, setECMAFeatures, setGlobal, removeGlobal, changeRule} from '../actions/output';

import Header from './Header.jsx';
import Wrapper from './Wrapper.jsx';
import Main from './Main.jsx';
import SideMenu from './SideMenu.jsx';
import OptionGroup from './OptionGroup.jsx';
import CheckList from './CheckList.jsx';
import RadioSet from './RadioSet.jsx';
import GlobalsOption from './GlobalsOption.jsx';
import Document from './Document.jsx';
import Preview from './Preview.jsx';
import RuleList from './RuleList.jsx';
import {Environments, ECMAFeatures} from '../constants'
import Rule from './Rule.jsx';
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

      let rules = ruleSchema.map(schema =>
        <Rule
          name={schema.name}
          schema={schema.schema}
          onChange={e => dispatch(changeRule(e.name, e.args))}
          onClickHelp={({name}) => dispatch(openRuleDocument(name))} />
      );

      const isMenuItemSelected = ({name}) => name === view.selectedMenuItem;
      return (
        <div className="app">
          <Wrapper className="pure-g">
            <SideMenu className="pure-u-7-24">
              <OptionGroup name="Environments">
                <CheckList
                  name="env"
                  keys={Environments}
                  defaultChecked={output.env}
                  onChange={(env) => dispatch(setEnv(env))}
                  />
              </OptionGroup>

              <OptionGroup name="Globals">
                <GlobalsOption
                  globals={output.globals}
                  onAdd={name => dispatch(setGlobal(name))}
                  onChange={(name, value) => dispatch(setGlobal(name, value))}
                  onRemove={name => dispatch(removeGlobal(name))} />
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
                  onChange={e => dispatch(setEcmaOrParser(e.value))} />

                {
                  (ecmaOrParser => {
                    if (ecmaOrParser === 'ecmaFeatures') {
                      return (
                        <div className="option">
                          <h4 className="option__title">ecmaFeatures</h4>

                          <CheckList
                              id="ecma-features"
                              name="ecmaFeatures"
                              keys={ECMAFeatures}/>
                        </div>
                      );
                    } else if (ecmaOrParser === 'parser') {
                      return (
                        <div className="option parser-option">
                          <h4 className="option__title">parser</h4>

                          <div className="pure-form">
                            <select className="parser-option__pulldown pure-input-1-2" name="parser">
                              <option value=""></option>
                              <option value="babel-parser">babel-parser</option>
                            </select>
                          </div>
                        </div>
                      );
                    }
                  })(view.ecmaOrParser)
                }

              </OptionGroup>

              <OptionGroup name="Rules">
                <RuleList rules={rules} />
              </OptionGroup>

            </SideMenu>
            <Main className="pure-u-17-24">
              <Menu
                items={[
                  { name: 'preview', label: 'Preview' },
                  { name: 'document', label: 'Document' }
                ]}
                selectedItem={view.selectedMenuItem}
                onClickItem={({name}) => dispatch(selectMenuItem(name))}
                horizontal={true}
                />
              <div className="main__contents">
              {
                (selectedMenuItem => {
                  if (selectedMenuItem === 'preview') {
                    return <Preview target={output} />;
                  } else {
                    return <Document url={view.documentUrl} />;
                  }
                })(view.selectedMenuItem)
              }
              </div>
            </Main>
          </Wrapper>
        </div>
      );
    }
  }
