// Importing required components and hooks
import { Button } from 'antd'; // Ant Design button component for styling
import { useForm } from 'react-hook-form'; // React Hook Form for form handling
import { useLoginMutation } from '../redux/features/auth/authApi'; // Redux Toolkit Query mutation hook for login API

/**
 * Login Component
 * A React component for handling user login using a form.
 */
const Login = () => {
  // Initializing the useForm hook to manage form state and validation
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: 'A-0001', // Default user ID value for demonstration
      password: 'admin123', // Default password value for demonstration
    },
  });

  // Using the useLoginMutation hook to handle the login API request
  // login: A function to trigger the login API call
  // data: Response data from the API call (if successful)
  // error: Error object (if the API call fails)
  const [login, { data, error }] = useLoginMutation();

  // Logging API response and error for debugging purposes
  console.log('data', data); // Logs successful response data
  console.log('error', error); // Logs error details if the API call fails

  // Handler function for form submission
  const onSubmit = (data) => {
    // Creating the payload to send to the API
    const userInfo = {
      id: data.userId, // Map form userId to the API payload's id
      password: data.password, // Map form password to the API payload's password
    };

    // Trigger the login mutation with the user info
    login(userInfo);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* User ID Input Field */}
      <div>
        <label htmlFor="id">ID: </label>
        <input type="text" id="id" {...register('userId')} />
      </div>

      {/* Password Input Field */}
      <div>
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" {...register('password')} />
      </div>

      {/* Submit Button */}
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;

/**
 * Usage example:
 *
 * <Login />
 *
 * - This component renders a form with default values for user ID and password.
 * - On form submission, it triggers the login mutation to authenticate the user.
 * - Replace defaultValues with empty strings or dynamic values as needed in production.
 */
