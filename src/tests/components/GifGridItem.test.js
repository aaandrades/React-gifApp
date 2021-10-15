import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Test for GifGrifItem Component", () => {
  const title = "This is a title";
  const url = "https://localhost:8180/something.png";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);
  console.log("WRAPPER: ",wrapper)

  test("should render <GifGrifItem/> correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should have a paragraph with the Title", () => {
    const span = wrapper.find("span");
    expect(span.text().trim()).toBe(title);
  });

  test("should have an url", () => {
    const img = wrapper.find("img");
    expect(img.props().src).toBe(url);
  });

  test("should have an alternative Title", () => {
    const img = wrapper.find("img");
    expect(img.props().alt).toBe(title);
  });

  test("should have animate classname", () => {
    const div = wrapper.find("div").at(0);
    const className = div.prop("className");
    expect(className.includes("animate__animated")).toBe(true);
  });
});
