import * as React from "react"
import TabsUnstyled from "@mui/base/TabsUnstyled"
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled"
import { Tab, TabsList } from "./styles"
import CourseStudents from "../CourseStudents";

export default function TabsStudents({group_id}) {
    return (
        <TabsUnstyled defaultValue={0} style={{padding: '10px'}}>
            <TabsList>
                <Tab>Guruhga azolar</Tab>
                <Tab>Azolikni kutayotganlar</Tab>
            </TabsList>
            <TabPanelUnstyled value={0}>
                <CourseStudents group_id={group_id} status={true}/>
            </TabPanelUnstyled>
            <TabPanelUnstyled value={1}>
                <CourseStudents group_id={group_id} status={false}/>
            </TabPanelUnstyled>
        </TabsUnstyled>
    );
}