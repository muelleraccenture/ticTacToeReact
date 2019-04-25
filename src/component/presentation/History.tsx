import {Button} from "react-native";
import React from "react";

export class History extends React.Component {

    render() {
        return (
            <Button
                title={"Back To Home"}
                onPress={() => this.props.navigation.navigate('Home')}
            >
            </Button>
        )
    }
}
