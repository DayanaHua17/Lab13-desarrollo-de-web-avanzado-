import { UserProfile } from '@clerk/nextjs';

export default function UserProfilePage() {
  return (
    <UserProfile routing="path" path="/dashboard/user-profile" />
  );
}