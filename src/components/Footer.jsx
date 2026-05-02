

"use client";

import React from 'react';
import Link from 'next/link';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import { IoTimeOutline } from 'react-icons/io5';

const footerData = [
    {
        id: 1,
        title: "Product",
        links: [
            { id: 1, name: "Features", path: "/features" },
            { id: 2, name: "Pricing", path: "/pricing" },
            { id: 3, name: "Templates", path: "/templates" },
            { id: 4, name: "Integrations", path: "/integrations" },
        ],
    },
    {
        id: 2,
        title: "Company",
        links: [
            { id: 1, name: "About", path: "/about" },
            { id: 2, name: "Blog", path: "/blog" },
            { id: 3, name: "Careers", path: "/careers" },
            { id: 4, name: "Press", path: "/press" },
        ],
    },
    {
        id: 3,
        title: "Resources",
        links: [
            { id: 1, name: "Documentation", path: "/docs" },
            { id: 2, name: "Help Center", path: "/help" },
            { id: 3, name: "Community", path: "/community" },
            { id: 4, name: "Contact", path: "/contact" },
        ],
    },
];

const footerInfo = {
    brand: "SunCart",
    description: "Your premium summer essentials destination for quality products and exceptional service.",
    address: "123 Summer Street, Miami, FL 33101",
    email: "hello@suncart.com",
    phone: "+1 (888) 123-4567",
    hours: "Mon-Fri: 9AM - 6PM EST",
};

const Footer = () => {
    const socialLinks = [
        { icon: RiInstagramFill, href: "https://instagram.com", label: "Instagram" },
        { icon: FaFacebookSquare, href: "https://facebook.com", label: "Facebook" },
        { icon: FaXTwitter, href: "https://twitter.com", label: "Twitter" },
    ];

    const legalLinks = [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms" },
        { name: "Return Policy", path: "/returns" },
        { name: "Shipping Info", path: "/shipping" },
    ];

    return (
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 py-12 mt-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
                {/* Brand & Contact Section */}
                <div className="md:col-span-4 space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                        {footerInfo.brand}
                    </h2>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        {footerInfo.description}
                    </p>

                    {/* Contact Info */}
                    <div className="space-y-3 pt-2">
                        <div className="flex items-start gap-3">
                            <MdLocationOn className="text-amber-400 mt-0.5 flex-shrink-0" size={18} />
                            <span className="text-gray-300 text-sm">{footerInfo.address}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MdEmail className="text-amber-400 flex-shrink-0" size={18} />
                            <a href={`mailto:${footerInfo.email}`} className="text-gray-300 hover:text-amber-400 text-sm transition-colors">
                                {footerInfo.email}
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <MdPhone className="text-amber-400 flex-shrink-0" size={18} />
                            <a href={`tel:${footerInfo.phone}`} className="text-gray-300 hover:text-amber-400 text-sm transition-colors">
                                {footerInfo.phone}
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <IoTimeOutline className="text-amber-400 flex-shrink-0" size={18} />
                            <span className="text-gray-300 text-sm">{footerInfo.hours}</span>
                        </div>
                    </div>
                </div>

                {/* Links Section */}
                <div className="md:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
                    {footerData.map((item) => (
                        <div key={item.id}>
                            <h3 className="text-sm md:text-base font-semibold text-amber-400 mb-3 uppercase tracking-wider">
                                {item.title}
                            </h3>
                            <ul className="space-y-2">
                                {item.links.map((link) => (
                                    <li key={link.id}>
                                        <Link
                                            href={link.path}
                                            className="text-gray-400 hover:text-amber-400 transition-colors text-sm md:text-base"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Social & Newsletter Section */}
                <div className="md:col-span-3 space-y-4">
                    <h3 className="text-sm md:text-base font-semibold text-amber-400 mb-3 uppercase tracking-wider">
                        Follow Us
                    </h3>
                    <div className="flex items-center gap-3">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="bg-gray-800 text-amber-400 rounded-lg p-2.5 hover:bg-amber-500 hover:text-white transition-all duration-200 hover:scale-105"
                                >
                                    <Icon size={20} />
                                </a>
                            );
                        })}
                    </div>

                    {/* Newsletter Signup */}
                    <div className="pt-4">
                        <h4 className="text-white text-sm font-semibold mb-2">Stay Updated</h4>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors"
                            />
                            <button className="px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-lg text-sm font-semibold hover:from-amber-700 hover:to-orange-600 transition-all">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Legal Links & Copyright Section */}
            <div className="border-t border-gray-800 mt-8 pt-6">
                <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Legal Links */}
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                            {legalLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.path}
                                    className="text-gray-400 hover:text-amber-400 text-xs md:text-sm transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Copyright */}
                        <p className="text-gray-400 text-xs md:text-sm text-center">
                            &copy; {new Date().getFullYear()} {footerInfo.brand}. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;