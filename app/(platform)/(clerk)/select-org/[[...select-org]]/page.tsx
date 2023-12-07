import { OrganizationList } from "@clerk/nextjs";

export default function CreateOrgamizationPage() {
    return (
        <OrganizationList 
            hidePersonal
            afterSelectOrganizationUrl="/organization/:id"
            afterCreateOrganizationUrl="/organization/:id"
        />
    );
}