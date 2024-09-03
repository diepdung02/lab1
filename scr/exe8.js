import React from "react";
import {
    SectionList,
    Text,
    View,
    StyleSheet,
    SafeAreaView,
} from "react-native";

const groupPeopleByLastName = (_data) => {
    const data = [..._data];
    const groupedData = data.reduce((accumulator, item) => {
        const group = item.name.last[0].toUpperCase();

        if (accumulator[group]) {
            accumulator[group].data.push(item);
        } else {
            accumulator[group] = {
                title: group,
                data: [item],
            };
        }
        return accumulator;
    }, {});

    const section = Object.keys(groupedData).map((key) => {
        return groupedData[key];
    });

    return section.sort((a, b) => {
        if (a.title > b.title) {
            return 1;
        }
        return -1;
    });
};

const PEOPLE = [
    {
        name: {
            title: "Mr",
            first: "Nguyễn Nam",
            last: "Giang",
        },
    },
    {
        name: {
            title: "Mr",
            first: "Trần Đức",
            last: "Trà",
        },
    },
    {
        name: {
            title: "Mr",
            first: "Diệp Minh",
            last: "Dũng",
        },
    },
];

export default () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <SectionList
                    sections={groupPeopleByLastName(PEOPLE)}
                    keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
                    renderSectionHeader={({ section }) => {
                        return (
                            <View style={styles.sectionHeader}>
                                <Text>{section.title}</Text>
                            </View>
                        );
                    }}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.row}>
                                <Text style={styles.name}>
                                    {item.name.first} {item.name.last}
                                </Text>
                            </View>
                        );
                    }}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                />
            </View>
        </SafeAreaView>
    );
};

// Các kiểu dáng
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        top:100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    name: {
        fontSize: 16,
        textAlign:"center"
    },
    separator: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        height: 1,
    },
    sectionHeader: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "rgb(170, 170, 170)",
        alignItems: 'center',
    },
});
