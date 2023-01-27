import React, { useEffect, useState, useRef } from "react";
import { Text, Dimensions, Switch } from "react-native";
import Slider from "@react-native-community/slider";
import styled from "styled-components/native";
import useCustomHook from "./utils/useCustomHook";
import { WithLocalSvg } from "react-native-svg";
import TestSvg from "./assets/images/icon-slider.svg";
const height = Dimensions.get("window").height;
const PricingView = () => {
  const [isDiscount, setDisCount] = useState(false);
  const [pageViews, setPageViews] = useState("100K");
  const [pricing, setPricing] = useState(8.0);
  const valueChange = (value: number) => {
    setPageViews(useCustomHook(value).pageviews);
    setPricing(useCustomHook(value).pricing);
  };
  const toggleSwitch = () => setDisCount((previousState) => !previousState);
  return (
    <WindowView>
      <HeaderView>
        <BigHeaderText>{"Simple, traffic-based pricing"}</BigHeaderText>
        <SmallHeaderText>{"Sign-up for our 30-day trial."}</SmallHeaderText>
        <SmallHeaderText>{"No credit card required."}</SmallHeaderText>
      </HeaderView>
      <OptionView>
        <SliderView>
          <PageViewText>{pageViews + " PAGEVIEWS"}</PageViewText>
          <Slider
            style={{ width: 300, height: 40 }}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            onValueChange={(value) => valueChange(value)}
          />
          <PriceView>
            {isDiscount ? (
              <PricingText>{"$" + (pricing * 0.75).toFixed(2)}</PricingText>
            ) : (
              <PricingText>{"$" + pricing.toFixed(2)}</PricingText>
            )}
            <Text>{"/ month"}</Text>
          </PriceView>
          <ToggleView>
            <ToggleText>{"Monthly Billing"}</ToggleText>
            <Switch
              style={{ marginHorizontal: 10 }}
              trackColor={{ false: "#cdd7ee", true: "#81b0ff" }}
              thumbColor={isDiscount ? "white" : "#f4f3f4"}
              onValueChange={toggleSwitch}
              value={isDiscount}
            />
            <ToggleText>{"Yearly Billing"}</ToggleText>
            <YearlyDiscountText>
              <Text
                style={{
                  color: "red",
                  fontSize: 10,
                }}
              >
                {"-25%"}
              </Text>
            </YearlyDiscountText>
          </ToggleView>
        </SliderView>
        <TrialView>
          <TrialTextView>
            <TrialViewText>{"Unlimited websites"}</TrialViewText>
            <TrialViewText>{"100% data ownership"}</TrialViewText>
            <TrialViewText>{"Email reports"}</TrialViewText>
          </TrialTextView>
          <TrialBtnView>
            <TrialBtn>
              <TrialViewText>{"Start my trial"}</TrialViewText>
            </TrialBtn>
          </TrialBtnView>
        </TrialView>
      </OptionView>
    </WindowView>
  );
};
export default PricingView;

const WindowView = styled.View`
  width: 375px;
  height: ${height}px;
  align-self: center;
  flex: 1;
  background-color: #f1f5fe;
`;
const HeaderView = styled.View`
  background-color: #f1f5fe;
  flex: 0.2925;
  align-items: center;
  justify-content: center;
`;
const BigHeaderText = styled.Text`
  font-size: 23px;
  font-weight: bold;
  color: #293356;
  font-family: "Manrope";
`;
const SmallHeaderText = styled.Text`
  font-size: 18px;
  color: #858fad;
  font-family: "Manrope";
`;
const OptionView = styled.View`
  flex: 0.6018;
  margin-horizontal: 25px;
`;
const PageViewText = styled.Text`
  align-self: center;
  font-size: 15px;
  color: #858fad;
  font-family: "Manrope";
`;
const PricingText = styled.Text`
  font-size: 30px;
  padding-right: 10px;
  color: #293356;
  font-family: "Manrope";
`;
const SliderView = styled.View`
  flex: 0.57;
  justify-content: space-evenly;
  background-color: white;
`;
const PriceView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const ToggleView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const ToggleText = styled.Text`
  font-size: 10px;
  color: #858fad;
  font-family: "Manrope";
`;
const YearlyDiscountText = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #fdeee7;
  width: 40px;
  height: 25px;
  border-radius: 15px;
  right: 10px;
  position: absolute;
`;
const TrialView = styled.View`
  flex: 0.43;
  justify-content: center;
  background-color: white;
  margin-top: 10px;
`;
const TrialTextView = styled.View`
  flex: 0.6;
  justify-content: center;
  align-items: center;
`;
const TrialBtnView = styled.View`
  flex: 0.4;
  justify-content: center;
  align-items: center;
`;
const TrialBtn = styled.TouchableOpacity`
  width: 200px;
  height: 50px;
  border-radius: 30px;
  background-color: #293356;
  justify-content: center;
  align-items: center;
`;
const TrialViewText = styled.Text`
  font-size: 15px;
  margin-vertical: 5px;
  color: #858fad;
  font-family: "Manrope";
`;
