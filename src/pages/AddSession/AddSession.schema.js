import * as yup from "yup"

const schema = yup.object().shape({


    session_name: yup.string()
                .min(1, "Invalid")
                .max(10, 'Too Long!')
                .required(),

    date: yup.string()
                .max(50, 'Too Long!')
                .required(),

    time: yup.string()
                .max(50, 'Too Long!')
                .required(),

    room_name: yup.string()
                .min(0, "Invalid")
                .required(),            
})

export default schema