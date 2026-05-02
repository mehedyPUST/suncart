
"use client"

import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Card } from "@heroui/card";
import { Avatar } from "@heroui/react";

const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;

    console.log(user)
    return (
        <div>
            <Card className="max-w-96 mx-auto flex flex-col items-center border mt-5 mb-5 p-5">

                <Avatar className="h-25 w-25">
                    <Avatar.Image
                        alt={user?.name || "User"}
                        src={user?.image}
                        referrerPolicy="no-referrer"
                    />
                    <Avatar.Fallback>{user?.name?.charAt(0) || "U"}</Avatar.Fallback>
                </Avatar>
                <h2>{user?.name}</h2>
                <p>{user?.email}</p>

                <UpdateUserModal />
            </Card>
        </div>
    );
};

export default ProfilePage;