import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const Layout = async ({ children }: { children: React.ReactNode }) => {
    const { has } = await auth();

    const hasStarterPlan = has({ plan: "starter" });
    const hasProPlan = has({ plan: "pro" });
    const isPaidMember = hasStarterPlan || hasProPlan;

    if (!isPaidMember) {
        redirect("/");
    }

    return (
        <div>
            <h1>{ children }</h1>
        </div>
    )
}

export default Layout;