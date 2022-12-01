// import { Component, PropsWithChildren } from "react";
import { View, Text } from '@tarojs/components';
import Footer from '@components/common/footer';
import './index.less';

// export default class Index extends Component<PropsWithChildren> {

//   componentWillMount () { }

//   componentDidMount () { }

//   componentWillUnmount () { }

//   componentDidShow () { }

//   componentDidHide () { }

//   render () {
//     return (
//       <View className='index'>
//         <Text>eeee</Text>
//       </View>
//     )
//   }
// }
export default function Index() {
    return (
        <View className='index'>
            <Text>这是首页</Text>
            <Footer />
        </View>
    );
}
