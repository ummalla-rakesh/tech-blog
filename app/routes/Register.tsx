import { LoaderFunctionArgs } from '@remix-run/node';
import Registration from '~/components/Registration';

function Register() {
  return <Registration />;
}
export async function loader({ request }: LoaderFunctionArgs) {
  return {};
}
export default Register;
