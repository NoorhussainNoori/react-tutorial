import React from "react";
import data from "../../../assets/data/data";

const Playground = () => {
  return (
    <>
      <h1>Student Data</h1>
      {data.map((student) => {
        return (
          <>
            <div
              key={student.studentId}
              style={{
                border: "1px solid black",
                marginBottom: 5,
                padding: 10,
              }}
              className="card"
            >
              <div className="title">
                <h3>
                  {student.studentId} -{" "}
                  {student.name.first + "  " + student.name.last}
                </h3>
              </div>
              <div className="age">
                <h5>Age: {student.age}</h5>
              </div>
              <div className="address">
                <p>
                  {student.address.street}, {student.address.city},{" "}
                  {student.address.state}, Postal Code:{" "}
                  {student.address.postalCode}
                </p>
              </div>
              <div className="course">
                {student.courses.map((course) => {
                  return (
                    <div
                      className="card"
                      style={{
                        border: "1px solid black",
                        padding: 3,
                        margin: 1,
                      }}
                      key={course.courseId}
                    >
                      <div className="card-title">
                        <h4>{course.title}</h4>
                      </div>
                      <div className="instructor-info">
                        <h5>Instructor: {course.instructor.name}</h5>
                        <h6>Email: {course.instructor.email}</h6>
                      </div>
                      <div className="marks">
                        <ul>
                          {course.grades.map((mark) => {
                            return <li>{mark}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                  );
                })}
                <div className="extra">
                  {student.extracurricular.map((activity) => {
                    return (
                      <div
                        style={{
                          border: "1px solid blue",
                          padding: 2,
                          margin: 5,
                        }}
                        className="activity-card"
                      >
                        <h5>{activity.activity}</h5>
                        <p>{activity.role}</p>
                        <ul>
                          <p>Meetings</p>
                          {activity.meetings == undefined
                            ? "No Meeting Available"
                            : activity.meetings.map((meet) => {
                                return <li>{meet}</li>;
                              })}
                        </ul>
                        <ul>
                          <p>Extra Subjects</p>
                          {activity.subjects == undefined
                            ? "N/A"
                            : activity.subjects.map((subject) => {
                                return <li>{subject}</li>;
                              })}
                        </ul>

                        <ul>
                          {activity.position == undefined
                            ? ""
                            : activity.position}
                          <p>Seasons</p>
                          {activity.seasons == undefined
                            ? ""
                            : activity.seasons.map((season) => {
                                return (
                                  <li>
                                    {season.year} - {season.record}
                                  </li>
                                );
                              })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Playground;
