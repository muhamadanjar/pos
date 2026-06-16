import DashboardLayout from '@/layouts/dashboard-layout'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import GeneralTab from './components/general/general-tab'
import LocalizationTab from './components/localization/localization-tab'

const tabsStyle = `
  [data-slot="tabs-trigger"][data-state="active"]::after {
    background-color: rgb(0, 110, 33) !important;
  }
  [role="option"] {
    color: rgb(21, 30, 20) !important;
  }
  [role="option"]:hover {
    background-color: rgb(231, 241, 225) !important;
  }
  [role="option"][data-state="checked"] {
    background-color: rgb(71, 230, 96) !important;
    color: rgb(255, 255, 255) !important;
  }
`

export default function SettingsPage() {
  return (
    <>
      <style>{tabsStyle}</style>
      <DashboardLayout title="Settings" subtitle="Manage your store preferences">
        <Tabs defaultValue="general" className="w-full" orientation="horizontal">
        <TabsList variant="line" className="w-full justify-start border-b border-ds-surface-highest bg-transparent p-0 gap-8">
          <TabsTrigger value="general" className="text-ds-on-surface-variant data-active:text-ds-primary pb-4">General</TabsTrigger>
          <TabsTrigger value="localization" className="text-ds-on-surface-variant data-active:text-ds-primary pb-4">Localization</TabsTrigger>
          <TabsTrigger value="store" disabled className="text-ds-on-surface-variant/50 pb-4">
            Store
          </TabsTrigger>
          <TabsTrigger value="users" disabled className="text-ds-on-surface-variant/50 pb-4">
            Users
          </TabsTrigger>
          <TabsTrigger value="security" disabled className="text-ds-on-surface-variant/50 pb-4">
            Security
          </TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="pt-6">
          <GeneralTab />
        </TabsContent>
        <TabsContent value="localization" className="pt-6">
          <LocalizationTab />
        </TabsContent>
      </Tabs>
    </DashboardLayout>
    </>
  )
}