import {Component, PropTypes} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import viewActionCreators from '../actions/view';
import outputActionCreators from '../actions/output';

import Header from './Header.jsx';
import Wrapper from './Wrapper.jsx';
import Main from './Main.jsx';
import SideMenu from './SideMenu.jsx';
import OptionGroup from './OptionGroup.jsx';
import CheckList from './CheckList.jsx';
import RadioSet from './RadioSet.jsx';
import Globals from './Globals.jsx';
import MarkdownViewer from './MarkdownViewer.jsx';
import Preview from './Preview.jsx';
import {Environments, ECMAFeatures} from '../constants'
import Rules from './Rules.jsx';
import {Menu} from './Menu.jsx';
import Parser from './Parser.jsx';
import ruleSchema from "../constants/eslintRuleSchema.json";

@connect(state => ({
  view: state.view.toJS(),
  output: state.output.toJS(),
}))
export default
  class App extends Component {
    constructor(props) {
      super(props);

      const actionCreators = {...viewActionCreators, ...outputActionCreators};
      this.actions = bindActionCreators(actionCreators, props.dispatch);

      this.onClickMenuItem = this.onClickMenuItem.bind(this);
      this.onChangeEnv = this.onChangeEnv.bind(this);
      this.onChangeGlobals = this.onChangeGlobals.bind(this);
      this.onChangeEcmaFeatures = this.onChangeEcmaFeatures.bind(this);
      this.onChangeParser = this.onChangeParser.bind(this);
      this.onChangeRules = this.onChangeRules.bind(this);
      this.onClickHelp = this.onClickHelp.bind(this);
      this.onClickLinkInMarkdown = this.onClickLinkInMarkdown.bind(this);
    }

    render () {
      let {view, output, dispatch} = this.props;

      const isMenuItemSelected = ({name}) => name === view.selectedMenuItem;
      const {setEcmaOrParser, selectMenuItem} = this.actions;

      return (
        <div className="app">
          <Wrapper className="pure-g">
            <Main className="pure-u-17-24">
              <Menu
                heading=".eslintrc editor"
                items={[
                  { name: 'preview', label: 'Preview' },
                  {
                    name: 'document',
                    label: 'Document',
                    children: [
                      { name: 'document.docs/user-guide/configuring', label: 'Configure ESLint' },
                      { name: 'document.docs/user-guide/command-line-interface', label: 'Command Line Interface' },
                      { name: 'document.docs/rules/README', label: 'Rules' }
                    ]
                  }
                ]}
                selectedItem={view.selectedMenuItem}
                onClickItem={this.onClickMenuItem}
                horizontal={true} />
              <div className="main__contents">
              {
                (selectedMenuItem => {
                  if (selectedMenuItem === 'preview') {
                    return <Preview target={output} />;
                  } else {
                    return <MarkdownViewer
                      url={view.documentUrl}
                      md={view.documentMarkdown}
                      onClickLink={this.onClickLinkInMarkdown}/>;
                  }
                })(view.selectedMenuItem)
              }
              </div>
            </Main>

            <SideMenu className="pure-u-7-24">
              <OptionGroup name="Environments">
                <CheckList
                  name="env"
                  keys={Environments}
                  defaultChecked={output.env}
                  onChange={this.onChangeEnv} />
              </OptionGroup>

              <OptionGroup name="Globals">
                <Globals
                  defaultValue={output.globals}
                  onChange={this.onChangeGlobals}/>

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
                  onChange={({value}) => setEcmaOrParser(value)} />

                {
                  (ecmaOrParser => {
                    if (ecmaOrParser === 'ecmaFeatures') {
                      return (
                        <div className="option">
                          <h4 className="option__title">ecmaFeatures</h4>

                          <CheckList
                              id="ecma-features"
                              name="ecmaFeatures"
                              keys={ECMAFeatures}
                              defaultChecked={output.ecmaFeatures}
                              onChange={this.onChangeEcmaFeatures}/>
                        </div>
                      );
                    } else if (ecmaOrParser === 'parser') {
                      return (
                        <div className="option parser-option">
                          <h4 className="option__title">parser</h4>
                          <Parser
                            values={["esprima", "esprima-fb", "babel-parser"]}
                            defaultValues={output.parser}
                            onChange={this.onChangeParser}/>
                        </div>
                      );
                    }
                  })(view.ecmaOrParser)
                }

              </OptionGroup>

              <OptionGroup name="Rules">
                <Rules
                  rules={output.rules}
                  schema={ruleSchema}
                  onChange={this.onChangeRules}
                  onClickHelp={this.onClickHelp} />
              </OptionGroup>

            </SideMenu>

          </Wrapper>
        </div>
      );
    }

    onClickMenuItem({name}) {
      let [itemName, documentName] = name.split('.');
      if (documentName) {
        this.actions.openDocument(`${documentName}.md`);
      } else {
        this.actions.selectMenuItem(itemName);
      }
    }

    onChangeEnv(value) {
      this.actions.setEnv(value);
    }

    onChangeGlobals(value) {
      this.actions.setGlobals(value);
    }

    onChangeEcmaFeatures(value) {
      this.actions.setEcmaFeatures(value);
    }

    onChangeParser(value) {
      this.actions.setParser(value);
    }

    onChangeRules(rules) {
      this.actions.setRules(rules);
    }

    onClickHelp(e) {
      this.actions.openRuleDocument(e.name);
    }

    onClickLinkInMarkdown(documentUrl) {
      if (!documentUrl.match(/\.md$/)) {
        documentUrl += '.md';
      }
      this.actions.openDocument(documentUrl);
    }
  }
