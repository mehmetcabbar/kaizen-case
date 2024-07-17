import { View } from "react-native"
import { ISpacer } from "../../types/Types"


const Spacer = ({ paddingHorizontal, paddingVertical }: ISpacer) => {
    return (
        <>
            {paddingHorizontal ? <View style={{ paddingHorizontal: paddingHorizontal }} /> : null}
            {paddingVertical ? <View style={{ paddingVertical: paddingVertical }} /> : null}

        </>
    )
}

export default Spacer