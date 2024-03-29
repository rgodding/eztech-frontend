'use client'

import EditWebsiteInfoTextForm from '@/components/admin-components/forms/website-info/edit-website-info-text-form'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from '@/components/ui/dialog'
import { useToast } from '@/components/ui/use-toast'
import { WebsiteInfoField } from '@/types/domain-types'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import { IoPencilOutline } from 'react-icons/io5'

// PRODUCT MODALS AND POPOVERS
type AddWebsiteInfoTextModalProps = {
    infoText: WebsiteInfoField
}
export default function EditWebsiteInfoTextModal({
    ...props
}: AddWebsiteInfoTextModalProps) {
    const { infoText } = props
    const { toast } = useToast()
    const router = useRouter()
    const closeDialogRef = useRef<HTMLButtonElement>(null)

    const actionSuccess = (result: any) => {
        router.refresh()
        closeDialogRef.current?.click()
        toast({
            title: 'Succesfully edited text',
            description: `Edited text for ${infoText.type}`,
        })
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    buttonTip={`Edit Text`}
                    className="flex space-x-2"
                    variant="iconCircle"
                    size={'xsIcon'}
                >
                    <IoPencilOutline size={20} />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>Edit Text</DialogHeader>
                <EditWebsiteInfoTextForm
                    action={actionSuccess}
                    details={infoText}
                />
                <DialogClose ref={closeDialogRef} />
            </DialogContent>
        </Dialog>
    )
}
