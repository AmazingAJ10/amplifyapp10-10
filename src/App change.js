import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut, user }) {
  return (
    <View className="App">
      <Card>
        <Heading level={1}>AJ Hobbs Spirit Week!! Yay!</Heading>
        <h3>{user.username}</h3>
        <Image src={'https://media.tenor.co/images/20199c4c3a268222c4cf3cef0d423c17/raw'} width={240}/><br/>
        <Image src={logo} width={240} className="App-logo" alt="logo" /><br/>
        <img src="https://media1.tenor.com/images/46b83037b5b04d656e613172dc8041ee/tenor.gif?itemid=3974811" width={240}/>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);