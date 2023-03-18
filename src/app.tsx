import store from '@store/index';
import { Component, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import './app.less';

class App extends Component<PropsWithChildren> {
    componentDidShow() {}

    componentDidHide() {}

    render() {
        // this.props.children 是将要会渲染的页面
        // return this.props.children;
        return <Provider store={store}>{this.props.children}</Provider>;
    }
}

export default App;
