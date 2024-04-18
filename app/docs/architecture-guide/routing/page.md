## Routing

Next.js offers robust routing capabilities, allowing us to create dynamic pages and handle client-side navigation efficiently. Routing is configured based on the documentation structure to ensure a logical flow of content.

```jsx
// Example of dynamic routing in Next.js
import Link from 'next/link';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link href="/docs/getting-started">
          <a>Getting Started</a>
        </Link>
      </li>
      <li>
        <Link href="/docs/api-reference">
          <a>API Reference</a>
        </Link>
      </li>
      {/* Add more links as needed */}
    </ul>
  </nav>
);
```