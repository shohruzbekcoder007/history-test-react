import styled from "styled-components";
import Container from "@mui/material/Container";

export const CoursesContainer = styled(Container)`
  padding: 0;
`;

export const CourseHeader = styled.p`
  margin-bottom: 10px;
  font-weight: bold;
`;

export const CourseText = styled.p`
  margin-bottom: 10px;
`;

export const CourseFooter = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    span {
      font-weight: bold;
      font-size: 24px;
    }
  }
`;

export const AddCourse = styled.div`
  display: flex;
  justify-content: flex-end;
`;