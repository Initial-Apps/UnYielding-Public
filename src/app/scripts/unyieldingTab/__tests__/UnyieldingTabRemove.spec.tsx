import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Header } from "@fluentui/react-northstar";

import { UnyieldingTabRemove } from "../UnyieldingTabRemove";

describe("UnyieldingTabRemove Component", () => {
    // Snapshot Test Sample
    it("should match the snapshot", () => {
        const wrapper = shallow(<UnyieldingTabRemove />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    // Component Test Sample
    it("should render the tab", () => {
        const component = shallow(<UnyieldingTabRemove />);
        const divResult = component.containsMatchingElement(<Header content="You're about to remove your tab..." />);

        expect(divResult).toBeTruthy();
    });
});
