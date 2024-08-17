import { PreferencesTab } from '@/components/preferences-tab'

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-4 md: px-24 py-32 gap-4">
      <PreferencesTab />
      {/* dotted bg */}
      <div
        className="absolute top-0 z-[-2] h-screen w-screen dark:bg-[#000] dark:bg-[radial-gradient(#FFFFFF33_1px,#00091d_1px)] dark:bg-[size:20px_20px] bg-[#FFFFFF] bg-[radial-gradient(#00000033_1px,#FFFFFF_1px)] bg-[size:20px_20px]"
        aria-hidden="true"
      />
      It's my
    </main>
  )
}
