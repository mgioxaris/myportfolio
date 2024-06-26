'use client'
import React from 'react'
import SectionHeading from './SectionHeading'
import { artifacts } from '@/lib/data'
import Artifact from '@/components/Artifact'
import { useSectionInView } from '@/lib/hooks'

const Artifacts = () => {
  const { ref } = useSectionInView('Artifacts', 0.5)
  return (
    <section
      className="mx-auto max-w-screen-sm scroll-mt-28 leading-8"
      id="artifacts"
      ref={ref}
    >
      <SectionHeading>Artifacts</SectionHeading>
      <div>
        {artifacts.length > 0 && (
          <ul className="m-0 grid gap-4 sm:gap-6">
            {artifacts.map((artifact, index) => {
              return (
                <li key={artifact.title + index}>
                  <Artifact {...artifact} index={index} />
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </section>
  )
}

export default Artifacts
