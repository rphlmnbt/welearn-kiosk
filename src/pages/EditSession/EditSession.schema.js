import * as yup from "yup"

const schema = yup.object().shape({


    session_name: yup.string()
                .min(1, "Invalid")
                .max(50, 'Too Long!')
                .nullable(),

    date: yup.string()
                .max(50, 'Too Long!')
                .nullable(),

    time: yup.string()
                .max(50, 'Too Long!')
                .nullable(),

    uuid_room: yup.string()
                .min(0, "Invalid")
                .nullable()            
})

export default schema