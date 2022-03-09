import * as yup from "yup"

const schema = yup.object().shape({


    session_name: yup.string()
                .min(1, "Invalid")
                .max(10, 'Too Long!')
                .nullable(),

    date: yup.string()
                .max(50, 'Too Long!')
                .nullable(),

    time: yup.string()
                .max(50, 'Too Long!')
                .nullable(),

    room_name: yup.string()
                .min(0, "Invalid")
                .nullable()            
})

export default schema