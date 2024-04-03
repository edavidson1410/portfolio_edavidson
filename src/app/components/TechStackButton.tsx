import React from 'react';
import Image from 'next/image';

interface TechStackButtonProps {
  technology: string
}


function TechStack(props: TechStackButtonProps) {

    return <li className="border-2 rounded-lg p-1">{props.technology}</li>;
}

export default TechStack;
