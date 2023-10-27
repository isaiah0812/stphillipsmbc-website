/// <reference types="vite/client" />

declare module '*.svg' {
  import * as React from 'react';
  
	export const ReactComponent: React.FunctionComponent<React.SVGProps<
    React.SVGProps<SVGElement> & { title?: string }
  >>;
}