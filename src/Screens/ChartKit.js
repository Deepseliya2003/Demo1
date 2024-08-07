import React from "react";
import { SafeAreaView, View, Text, Dimensions, ScrollView } from 'react-native';
import { BarChart, ContributionGraph, LineChart, PieChart, ProgressChart } from 'react-native-chart-kit';

const ChartKit = () => {
    const data = {
        labels: ["Swim", "Bike", "Run"], // optional
        data: [0.8, 0.6, 0.8]
    };
    const mydata = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 150, 43]
            }
        ]
    };

    const data1 = [
        {
            name: "Seoul",
            population: 2150,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Toronto",
            population: 280,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Beijing",
            population: 5276,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "New York",
            population: 8538,
            color: "black",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Moscow",
            population: 1192,
            color: "rgb(0, 0, 255)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        }
    ];

    const commitsData = [
        { date: "2017-01-02", count: 1 },
        { date: "2017-01-03", count: 5 },
        { date: "2017-01-04", count: 3 },
        { date: "2017-01-05", count: 4 },
        { date: "2017-01-06", count: 5 },
        { date: "2017-01-30", count: 2 },
        { date: "2017-01-31", count: 3 },
        { date: "2017-03-01", count: 2 },
        { date: "2017-04-02", count: 4 },
        { date: "2017-03-05", count: 2 },
        { date: "2017-02-30", count: 4 }
    ];
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "red",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(200, 25, 200, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView>
                <View>
                    <Text>Bezier Line Chart</Text>
                    <LineChart
                        data={{
                            labels: ["January", "February", "March", "April", "May", "June"],
                            datasets: [
                                {
                                    data: [
                                        Math.random() * 50,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100
                                    ]
                                }
                            ]
                        }}
                        width={Dimensions.get("window").width} // from react-native
                        height={200}
                        yAxisLabel="$"
                        yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: "#e26a00",
                            backgroundGradientFrom: "#fb8c00",
                            backgroundGradientTo: "#ffa726",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#ffa726"
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16
                        }}
                    />
                </View>
                <ProgressChart
                    data={data}
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    strokeWidth={16}
                    radius={32}
                    chartConfig={chartConfig}
                    hideLegend={false}
                />

                <BarChart
                    data={mydata}
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    yAxisLabel="$"
                    chartConfig={chartConfig}
                    verticalLabelRotation={30}
                />
                <PieChart
                    data={data1}
                    height={250}
                    width={Dimensions.get("window").width} // from react-native
                    chartConfig={chartConfig}
                    accessor={"population"}
                    backgroundColor={"transparent"}
                    paddingLeft={"15"}
                    center={[10, 50]}
                    absolute
                />
                <ContributionGraph
                    values={commitsData}
                    endDate={new Date("2017-04-01")}
                    numDays={105}
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    chartConfig={chartConfig}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default ChartKit;