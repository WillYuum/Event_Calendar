import React from "react";
import dateformat from "dateformat";

import { View, Text, Image } from "react-native";
import { TouchableNativeFeedback } from "react-native";

//importing stylesheet file
import { SmallEventCardStyle } from "./SmallEventCardStyle.js";

/**
 * @prop {String} Title - Title displayed for event
 * @prop {String} Host - Name of the event host
 * @prop {Date} EventStartDate
 * @prop {Base64} ImageSrc
 *
 * @class SmallEventCardView
 * @extends {Component}
 */
class SmallEventCardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    //Styling varialbles
    const {
      containerCard,
      ImageContainer,
      EventImage,
      EventInfo,
      EventTitle,
      EventHost,
      EventDate,
      HostNameText
    } = SmallEventCardStyle;

    //props recieved from MapSmallCardEvent.js component
    const {
      EventId,
      Title,
      Host,
      EventStartDate,
      ImageSrc,
      ...props
    } = this.props;
    //static image
    let Image_Http_URL = {
      uri:
        "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png"
    };

    //adding the bas64 image to be able to show the image in source
    let ImageUrl = "data:image/png;base64," + ImageSrc + ";";
    return (
      <TouchableNativeFeedback
        onPress={() => props.navigation.push("Event", { EventId: EventId })}
      >
        <View style={containerCard}>
          <View style={ImageContainer}>
            <Image
              source={ImageSrc ? { uri: ImageUrl } : Image_Http_URL}
              style={EventImage}
            />
          </View>
          <View style={EventInfo}>
            <Text numberOfLines={1} style={EventTitle}>
              {Title}
            </Text>
            <Text style={EventHost}>
              by <Text style={HostNameText}>{Host}</Text>
            </Text>
            <Text numberOfLines={1} style={EventDate}>
              {/*Displaying the start date (Fri, Dec 20 - 02:00 AM)*/}
              {dateformat(EventStartDate, "ddd, mmm dd - HH:MM TT")}
            </Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default SmallEventCardView;
