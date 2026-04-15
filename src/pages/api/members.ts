import { members } from "@/data/members";
import { Member } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

interface ApiResponse {
    success: boolean;
    data: Member[];
} 

export default function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
    const { id } = req.query;

    if (id) {
        const member = members.find((m) => m.id  === Number(id))
        if (!member) {
            return res.status(404).json({ success: false, data: [] });
        }
        return res.status(200).json({ success: true, data: [member] })
    }

    res.status(200).json({ success: true, data: members });
}