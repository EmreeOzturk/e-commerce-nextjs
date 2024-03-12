import { getProviders } from 'next-auth/react';
const useProviders = async () => {
    const providers = await getProviders();
    return providers;
};
export default useProviders;
