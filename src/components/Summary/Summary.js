//react
import React, { useContext } from "react";

//react-router
import { withRouter } from "react-router-dom";

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

//charts
import DonutChart from "./../../charts/DonutChart/DonutChart";

//elements
import PaperCard from "./../../elements/PaperCard/PaperCard";
import TableList from "./../../elements/TableList/TableList";
import { yearOnly } from "./../../elements/DatePicker/DatePicker";

//context
import { useDocumentState } from "./../../context/CollectionContext/CollectionContext";
import BiographyContext from "./../../components/Biography/BiographyContext";
import EmploymentContext from "./../../components/Employment/EmploymentContext";
import EducationContext from "./../../components/Education/EducationContext";
import HobbyContext from "./../../components/Hobby/HobbyContext";

//styles
import commonViewStyles from "./../_common/ViewStyles";

/**
 * (Styles & Classes) Defines the CSS styles and classes for this component
 * @return generated classNames for component
 */
function getClasses() {
    return {
        ...commonViewStyles(),
        ...(makeStyles(theme => ({
            email: {
                marginTop: theme.spacing(1),
                marginBottom: theme.spacing(1),
                color: theme.palette.primary.light,
                "& a": {
                    ...theme.typography.body2,
                    color: theme.palette.primary.light
                }
            },
            phone: {
                marginTop: theme.spacing(1),
                marginBottom: theme.spacing(1),
                color: theme.palette.primary.light,
                "& a": {
                    ...theme.typography.body2,
                    color: theme.palette.primary.light
                }
            },
            quickBreakdownContainer: {
                marginTop: theme.spacing(6),
                textAlign: "left",
                "& h6": {
                    color: theme.palette.primary.light
                },
            },
            experienceOverviewContainer: {
                textAlign: "left",
                "& h6": {
                    color: theme.palette.primary.light
                },
                "& li": {
                    textAlign: "left",
                },
                "&:first-child": {
                    //borderRight: "1px solid #e0e0e0",
                    [theme.breakpoints.down("xs")]: {
                        borderRight: 0,
                        margin: theme.spacing(2, 0, 0)
                    }
                },
                margin: theme.spacing(4, 0)
            },
            employmentOverviewContainer: {
                textAlign: "left",
                "& h6": {
                    color: theme.palette.primary.light
                },
                "& li": {
                    textAlign: "left",
                },
                margin: theme.spacing(0, 0, 4)
            },
            educationOverviewContainer: {
                textAlign: "left",
                "& h6": {
                    color: theme.palette.primary.light
                },
                "& li": {
                    textAlign: "left",
                },
                margin: theme.spacing(0, 0, 4)
            },
            hobbyOverviewContainer: {
                textAlign: "left",
                "& h6": {
                    color: theme.palette.primary.light
                },
                "& li": {
                    textAlign: "left",
                },
                margin: theme.spacing(0, 0, 0)
            }
        })))()
    }
}

//presentation
/**
 * (Presentation Component) Displays Cover Letter
 * @param data  - data objects
 * - data[document] - current components doucment data
 * - data[experiencePrimaryChart] - data object for donut chart
 * - data[experiencePrimary] - data object for primary experience column
 * - data[experienceSecondary] - data object for secondary experience column
 * - data[employment] - summary of employement history
 * - data[education] - summary of education history
 * - data[isPaper] - inludes box shadow to component container
 * @param control - control functions
 * @param render - render components
 * @param props - props extra
 * @return JSX component
 */
export const Summary = ({ data, control, render, ...props }) => {
    const { document,
        experiencePrimaryChart, experienceSecondaryChart, experienceTertiaryChart, experienceQuaternaryChart,
        experiencePrimary, experienceSecondary, experienceTertiary, experienceQuaternary,
        employment, education, hobby, isPaper
    } = data;

    const classes = getClasses()
    return <>
        <PaperCard component="article" id="Summary" isPaper={isPaper}>
            <div className={isPaper ? classes.container : ""}>
                <footer>
                    <div style={{ width: "100%", height: 300, position: "relative" }} className={classes.quickBreakdownContainer}>
                        <h6 className={classes.subheading}>
                            {experiencePrimary.tableHead.col1.text}
                        </h6>
                        <div style={{ width: "100%", height: 300, position: "absolute" }} id="donutChart">
                            <DonutChart
                                chartData={experiencePrimaryChart}
                                showLegend={true}
                            />
                        </div>
                    </div>
                    <br />
                    <br />
                    <div style={{ width: "100%", height: 300, position: "relative" }} className={classes.quickBreakdownContainer}>
                        <h6 className={classes.subheading}>
                            {experienceSecondary.tableHead.col1.text}
                        </h6>
                        <div style={{ width: "100%", height: 300, position: "absolute" }} id="donutChart">
                            <DonutChart
                                chartData={experienceSecondaryChart}
                                showLegend={true}
                            />
                        </div>
                    </div>
                    {/*<div style={{ width: "100%", height: 300, position: "relative" }} className={classes.quickBreakdownContainer}>
                        <h6 className={classes.subheading}>
                            {experienceTertiary.tableHead.col1.text}
                        </h6>
                        <div style={{ width: "100%", height: 300, position: "absolute" }} id="donutChart">
                            <DonutChart
                                chartData={experienceTertiaryChart}
                                showLegend={true}
                            />
                        </div>
                    </div>
                    <div style={{ width: "100%", height: 300, position: "relative" }} className={classes.quickBreakdownContainer}>
                        <h6 className={classes.subheading}>
                            {experienceQuaternary.tableHead.col1.text}
                        </h6>
                        <div style={{ width: "100%", height: 300, position: "absolute" }} id="donutChart">
                            <DonutChart
                                chartData={experienceQuaternaryChart}
                                showLegend={true}
                            />
                        </div>
                    </div>*/}
                    <Grid container spacing={2} justify="center" component="article">
                        <Grid item xs={12} sm={6} className={classes.experienceOverviewContainer} component="section">
                            <h6 className={classes.subheading}>
                                {experiencePrimary.tableHead.col1.text}
                            </h6>
                            <TableList
                                tableRow={experiencePrimary.tableRow}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} className={classes.experienceOverviewContainer} component="section">
                            <h6 className={classes.subheading}>
                                {experienceSecondary.tableHead.col1.text}
                            </h6>
                            <TableList
                                tableRow={experienceSecondary.tableRow}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} className={classes.experienceOverviewContainer} component="section" style={{marginTop:0}}>
                            <h6 className={classes.subheading}>
                                {experienceTertiary.tableHead.col1.text}
                            </h6>
                            <TableList
                                tableRow={experienceTertiary.tableRow}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} className={classes.experienceOverviewContainer} component="section" style={{marginTop:0}}>
                            <h6 className={classes.subheading}>
                                {experienceQuaternary.tableHead.col1.text}
                            </h6>
                            <TableList
                                tableRow={experienceQuaternary.tableRow}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} justify="center">
                        <Grid item xs={12} className={classes.employmentOverviewContainer}>
                            <h6 className={classes.subheading}>
                                Employment History
                            </h6>
                            <TableList
                                tableHead={employment.tableHead}
                                tableRow={employment.tableRow}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} justify="center">
                        <Grid item xs={12} className={classes.educationOverviewContainer}>
                            <h6 className={classes.subheading}>
                                Education History
                            </h6>
                            <TableList
                                tableHead={education.tableHead}
                                tableRow={education.tableRow}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} justify="center">
                        <Grid item xs={12} className={classes.hobbyOverviewContainer}>
                            <h6 className={classes.subheading}>
                                Hobbies & Recreation
                            </h6>
                            <TableList
                                //tableHead={hobby.tableHead}
                                tableRow={hobby.tableRow}
                            />
                        </Grid>
                    </Grid>
                </footer>
            </div>
        </PaperCard>
    </>
}

//container
/**
 * (Container Component) Displays Cover Letter
 * @param match - dynamic url parameter
 * @param isPaper - inludes box shadow to component container
 * @param props - props extra
 * @return JSX component
 */
export default withRouter(({ match, isPaper, ...props }) => {
    const { document } = useDocumentState(
        BiographyContext,
        props.documentId || match.params["id"]
            ? "id"
            : "title",
        props.documentId || match.params["id"] || match.params["title"],
        {}
    );

    const { collection: employmentCollection } = useContext(EmploymentContext);
    const { collection: educationCollection } = useContext(EducationContext);
    const { collection: hobbyCollection } = useContext(HobbyContext);

    const experiencePrimaryChart = [];
    let total = 0;
    [...Array(5).keys()].reverse().map((index) => { //.reverse() -> in order to get the most popular label the darkest color
        index++;
        total += document[`experienceLevel${index}`];
    });
    [...Array(5).keys()].reverse().map((index) => { //.reverse() -> in order to get the most popular label the darkest color
        index++;
        experiencePrimaryChart.push({
            id: document[`experience${index}`],
            label: document[`experience${index}`],
            value: Math.floor(document[`experienceLevel${index}`] / total * 100) + (document[`experience${index}`] === "Javascript / ES6" ? 1 : 0),
        });
    });

    const experienceSecondaryChart = [];
    total = 0;
    [...Array(5).keys()].reverse().map((index) => { //.reverse() -> in order to get the most popular label the darkest color
        index += 5;
        index++;
        total += document[`experienceLevel${index}`];
    });
    [...Array(5).keys()].reverse().map((index) => { //.reverse() -> in order to get the most popular label the darkest color
        index += 5;
        index++;
        experienceSecondaryChart.push({
            id: document[`experience${index}`],
            label: document[`experience${index}`],
            value: Math.floor(document[`experienceLevel${index}`] / total * 100) + (document[`experience${index}`] === "MySQL" ? 1 : 0),
        });
    });

    const experienceTertiaryChart = [];
    total = 0;
    [...Array(5).keys()].reverse().map((index) => { //.reverse() -> in order to get the most popular label the darkest color
        index += 10;
        index++;
        total += document[`experienceLevel${index}`];
    });
    [...Array(5).keys()].reverse().map((index) => { //.reverse() -> in order to get the most popular label the darkest color
        index += 10;
        index++;
        experienceTertiaryChart.push({
            id: document[`experience${index}`],
            label: document[`experience${index}`],
            value: Math.floor(document[`experienceLevel${index}`] / total * 100) + (document[`experience${index}`] === "MySQL" ? 1 : 0),
        });
    });

    const experienceQuaternaryChart = [];
    total = 0;
    [...Array(5).keys()].reverse().map((index) => { //.reverse() -> in order to get the most popular label the darkest color
        index += 15;
        index++;
        total += document[`experienceLevel${index}`];
    });
    [...Array(5).keys()].reverse().map((index) => { //.reverse() -> in order to get the most popular label the darkest color
        index += 15;
        index++;
        experienceQuaternaryChart.push({
            id: document[`experience${index}`],
            label: document[`experience${index}`],
            value: Math.floor(document[`experienceLevel${index}`] / total * 100) + (document[`experience${index}`] === "MySQL" ? 1 : 0),
        });
    });

    const experiencePrimary = {
        tableHead: {
            col1: {
                align: "left",
                text: document[`experiencePrimary`]
            }
        },
        tableRow: (() => {
            const row = [];
            [...Array(5).keys()].map((index) => {
                index++;
                row.push({
                    col1: {
                        align: "left",
                        text: document[`experience${index}`],
                    }
                })
            });
            return row;
        })()
    };

    const experienceSecondary = {
        tableHead: {
            col1: {
                align: "left",
                text: document[`experienceSecondary`]
            }
        },
        tableRow: (() => {
            const row = [];
            [...Array(5).keys()].map((index) => {
                index++;
                index += 5;
                row.push({
                    col1: {
                        align: "left",
                        text: document[`experience${index}`],
                    }
                })
            });
            return row;
        })()
    };

    const experienceTertiary = {
        tableHead: {
            col1: {
                align: "left",
                text: document[`experienceTertiary`]
            }
        },
        tableRow: (() => {
            const row = [];
            [...Array(5).keys()].map((index) => {
                index++;
                index += 10;
                row.push({
                    col1: {
                        align: "left",
                        text: document[`experience${index}`],
                    }
                })
            });
            return row;
        })()
    };

    const experienceQuaternary = {
        tableHead: {
            col1: {
                align: "left",
                text: document[`experienceQuaternary`]
            }
        },
        tableRow: (() => {
            const row = [];
            [...Array(5).keys()].map((index) => {
                index++;
                index += 15;
                row.push({
                    col1: {
                        align: "left",
                        text: document[`experience${index}`],
                    }
                })
            });
            return row;
        })()
    };

    const employment = {
        tableHead: {
            col1: {
                align: "left",
                text: "Position"
            },
            col2: {
                align: "right",
                text: "Period"
            },
        },
        tableRow: (() => {
            const row = [];
            const sortedCollection = employmentCollection.concat().sort((a, b) => {
                if (a.index > b.index) {
                    return 1;
                }
                if (a.dateFrom < b.dateFrom) {
                    return -1;
                }
                return 0;
            });

            sortedCollection.map((employment, index) => {
                row.push({
                    col1: {
                        align: "left",
                        text: employment.position
                    },
                    col2: {
                        align: "right",
                        text: `${yearOnly(employment.dateFrom)} - ${yearOnly(employment.dateTo)}`
                    },
                })
            });
            return row;
        })()
    };

    const education = {
        tableHead: {
            col1: {
                align: "left",
                text: "Certification"
            },
            col2: {
                align: "right",
                text: "Period"
            },
        },
        tableRow: (() => {
            const row = [];
            educationCollection.map((education, index) => {
                row.push({
                    col1: {
                        align: "left",
                        text: education.grade
                    },
                    col2: {
                        align: "right",
                        text: `${yearOnly(education.dateFrom)} - ${yearOnly(education.dateTo)}`
                    },
                })
            });
            return row;
        })()
    };

    const hobby = {
        tableHead: {
            col1: {
                align: "left",
                text: "Hobby"
            }
        },
        tableRow: (() => {
            const row = [];
            hobbyCollection.map((hobby, index) => {
                row.push({
                    col1: {
                        align: "left",
                        text: hobby.title
                    }
                })
            });
            return row;
        })()
    };

    return Summary({
        ...props,
        data: {
            document,
            experiencePrimaryChart: experiencePrimaryChart.sort((a, b) => a.value - b.value),
            experienceSecondaryChart: experienceSecondaryChart.sort((a, b) => a.value - b.value),
            experienceTertiaryChart: experienceTertiaryChart.sort((a, b) => a.value - b.value),
            experienceQuaternaryChart: experienceQuaternaryChart.sort((a, b) => a.value - b.value),
            experiencePrimary,
            experienceSecondary,
            experienceTertiary,
            experienceQuaternary,
            employment,
            education,
            hobby,
            isPaper
        },
        control: {},
        render: {}
    });
});