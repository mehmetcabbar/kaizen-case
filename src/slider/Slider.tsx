import React, { useEffect, useRef, useState } from 'react';
import { FlatList, View, Dimensions, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import SingleContent from '../components/singleContent/SingleContent';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import myData from '../data/data.json'
import Pagination from '../components/pagination/Pagination';
import Spacer from '../components/spacer/Spacer';
import { useNavigation } from '@react-navigation/native';


const Slider = () => {
    const active: number = useSelector((state: RootState) => state.active.value);
    const flatListRef: any = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigation: any = useNavigation()

    useEffect(() => {
        const handleScrollToIndex = () => {
            flatListRef.current.scrollToIndex({ animated: true, index: active });
        };
        handleScrollToIndex();
    }, [active])

    const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(offsetX / (Dimensions.get('window').width - 55));
        setCurrentIndex(index);
    };

    return (
        <View>
            <FlatList
                data={myData?.content}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                renderItem={({ item, index }) => (
                    <View style={{ width: Dimensions.get('window').width - 55, }}>
                        <SingleContent
                            image={item?.image}
                            title={item.title}
                            buttonHex={item?.buttonHex}
                            index={index}
                            onPress={() => navigation.navigate("Details")}
                        />
                    </View>
                )}
                keyExtractor={(item: any) => item?.id}
                ref={flatListRef}
                onScroll={handleOnScroll}
            />
            <Spacer paddingVertical={7} />
            <Pagination index={currentIndex} />
        </View>
    );
}

export default Slider