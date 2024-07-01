export const SectionLink = ({
  onClick,
  title,
  description,
}: {
  onClick: (e: any) => void
  title: string
  description: string
}) => {
  return (
    <button
      onClick={onClick}
      className='group rounded-lg border border-transparent px-0 md:px-5 py-2 md:py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
      rel='noopener noreferrer'
    >
      <h2 className='mb-3 text-md lg:text-2xl font-semibold gradient-text'>
        {title}{' '}
        <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
          &rarr;
        </span>
      </h2>
      <p className='m-0 max-w-[30ch] text-xs md:text-sm opacity-50'>
        {description}
      </p>
    </button>
  )
}
