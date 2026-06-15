import DashboardLayout from '@/layouts/dashboard-layout'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import GeneralTab from './components/general/general-tab'
import LocalizationTab from './components/localization/localization-tab'

export default function SettingsPage() {
  return (
    <DashboardLayout title="Settings" subtitle="Manage your store preferences">
      <Tabs defaultValue="general" className="w-full flex gap-8 overflow-x-auto border-b">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="localization">Localization</TabsTrigger>
          <TabsTrigger value="store" disabled>
            Store
          </TabsTrigger>
          <TabsTrigger value="users" disabled>
            Users
          </TabsTrigger>
          <TabsTrigger value="security" disabled>
            Security
          </TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <GeneralTab />
        </TabsContent>
        <TabsContent value="localization">
          <LocalizationTab />
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}