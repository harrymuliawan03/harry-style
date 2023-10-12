export default function Header({title, body}) {
    return (
      <section className="flex flex-col mt-24 mx-5 lg:mx-0 lg:mt-0 gap-2">
        <span className="mt-4 block font-bold text-dark dark:text-white lg:text-3xl">
          {title}
        </span>
        <p className="text-neutral-500">
          {body}
        </p>
      </section>
    );
}