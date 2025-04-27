import RowFirst from "./components/row_first"
import RowSecond from "./components/row_second"
import RowThird from "./components/row_third"


const Fields = (props) => {
    const { register, errors } = props
    return (
        <>
            <RowFirst 
                errors={errors}
                register={register}
            />
            <RowSecond 
                errors={errors}
                register={register}
            />
            <RowThird 
                errors={errors}
                register={register}
            />
        </>
    )
}

export default Fields