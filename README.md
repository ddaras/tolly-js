# Tolly

A TypeScript package featuring the main Tolly class.

## Installation

```bash
npm install
```

## Building

```bash
npm run build
```

## Development

```bash
npm run dev
```

## Usage

```typescript
import { Tolly } from './dist';

const tolly = new Tolly('MyTolly');
console.log(tolly.greet()); // "Hello from MyTolly!"
console.log(tolly.getInfo()); // { name: 'MyTolly', version: '1.0.0' }
```

## API

### Class: Tolly

#### Constructor
- `new Tolly(name?: string)` - Creates a new Tolly instance

#### Methods
- `getName(): string` - Returns the name of the instance
- `setName(name: string): void` - Sets the name of the instance
- `getVersion(): string` - Returns the version
- `greet(): string` - Returns a greeting message
- `getInfo(): object` - Returns instance information 