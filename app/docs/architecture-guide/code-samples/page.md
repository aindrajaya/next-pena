

## Code Samples
We include code samples throughout the documentation to demonstrate implementation details and best practices. These samples cover various aspects of using Next.js effectively.
```jsx
// Example of data fetching in Next.js
import React from 'react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const UserDetails = () => {
  const router = useRouter();
  const { userId } = router.query;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`https://api.example.com/users/${userId}`);
      const userData = await response.json();
      setUser(userData);
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      {/* Display other user details */}
    </div>
  );
};

export default UserDetails;

```