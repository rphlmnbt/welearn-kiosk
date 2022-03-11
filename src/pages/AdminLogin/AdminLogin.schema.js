import * as yup from "yup"

const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string()
                .min(4, "Please enter at least 4 characters.")
                .required("Required"),
});

export default schema